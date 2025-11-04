import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sql from 'mssql'
import nodemailer from 'nodemailer'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/lead', async (req, res) => {
  try {
    const { email, fullName, company, message, consent } = req.body
    if (!email) return res.status(400).json({ error: 'Email required' })

    const pool = await sql.connect({
      user: process.env.DB_USER!,
      password: process.env.DB_PASS!,
      server: process.env.DB_HOST!,
      database: process.env.DB_NAME!,
      port: Number(process.env.DB_PORT || 1433),
      options: {
        encrypt: process.env.DB_ENCRYPT === 'true',
        trustServerCertificate: process.env.DB_TRUST_SERVER_CERT === 'true',
      },
    })

    const reqSql = pool.request()
    reqSql.input('Email', sql.NVarChar(320), email)
    reqSql.input('FullName', sql.NVarChar(200), fullName || null)
    reqSql.input('Company', sql.NVarChar(200), company || null)
    reqSql.input('Message', sql.NVarChar(sql.MAX), message || null)
    reqSql.input('ConsentMarketing', sql.Bit, consent ? 1 : 0)
    reqSql.input(
      'ConsentTimestampUtc',
      sql.DateTime2,
      consent ? new Date() : null
    )
    reqSql.input('Source', sql.NVarChar(100), 'website-cta')
    reqSql.output('LeadId', sql.UniqueIdentifier)
    const result = await reqSql.execute('crm.Leads_Create')
    await pool.close()

    // 🔹 Email senden
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.de',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER!,
        pass: process.env.MAIL_PASS!,
      },
    })

    await transporter.sendMail({
      from: '"Report Cube Website" <service@reportcube.de>',
      to: 'service@reportcube.de',
      subject: `Neue Kontaktanfrage von ${fullName || email}`,
      html: `
        <h3>Neue Kontaktanfrage</h3>
        <p><b>Name:</b> ${fullName || '—'}</p>
        <p><b>Firma:</b> ${company || '—'}</p>
        <p><b>E-Mail:</b> ${email}</p>
        <p><b>Nachricht:</b></p>
        <p>${message || '—'}</p>
        <hr />
        <p><b>Einwilligung Marketing:</b> ${consent ? 'Ja' : 'Nein'}</p>
      `,
    })

    res.json({ success: true, leadId: result.output.LeadId })
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`API server running on port ${port}`))
