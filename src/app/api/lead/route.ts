import sql from 'mssql'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

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
    req.input('Email', sql.NVarChar(320), email)
    req.input('Source', sql.NVarChar(100), 'website-cta')
    req.output('LeadId', sql.UniqueIdentifier)
    const result = await req.execute('crm.Leads_Create')

    await pool.close()

    return new Response(
      JSON.stringify({
        success: true,
        leadId: result.output.LeadId,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (err: any) {
    console.error(err)
    return new Response(
      JSON.stringify({ error: err.message || 'Internal error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
