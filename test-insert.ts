import 'dotenv/config'
import sql from 'mssql'

async function main() {
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

  const req = pool.request()
  req.input('Email', sql.NVarChar(320), 'kim.doe@example.com')
  req.input('FullName', sql.NVarChar(200), 'Kim Doe')
  req.input('Message', sql.NVarChar(sql.MAX), 'Bitte um Infos zu Report Cube.')
  req.input('ConsentMarketing', sql.Bit, true)
  req.input('Source', sql.NVarChar(100), 'website-cta')
  req.input('PageUrl', sql.NVarChar(500), 'https://reportcube.de/#cta')
  req.input('IpAddress', sql.VarChar(45), '203.0.113.10')
  req.input('UserAgent', sql.NVarChar(400), 'Mozilla/5.0')
  req.input('UTM_Source', sql.NVarChar(100), 'google')
  req.input('UTM_Medium', sql.NVarChar(100), 'cpc')
  req.input('UTM_Campaign', sql.NVarChar(150), 'brand')

  // ✅ WICHTIG: Output-Parameter deklarieren!
  req.output('LeadId', sql.UniqueIdentifier)

  const result = await req.execute('crm.Leads_Create')
  console.log('OK:', result.output) // { LeadId: 'xxxxxxxx-xxxx-....' }

  await pool.close()
}

main().catch(async (e) => {
  console.error(e)
  process.exit(1)
})
