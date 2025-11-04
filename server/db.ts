// db.ts
import sql from 'mssql'

let pool: sql.ConnectionPool | null = null

export async function getPool() {
  if (pool) return pool
  pool = await sql.connect({
    user: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    server: process.env.DB_HOST!,
    database: process.env.DB_NAME!,
    port: Number(process.env.DB_PORT || 1433),
    options: {
      encrypt: process.env.DB_ENCRYPT === 'true',
      trustServerCertificate: process.env.DB_TRUST_SERVER_CERT === 'true',
    },
    pool: {
      max: 5,
      min: 0,
      idleTimeoutMillis: 30000,
    },
  })
  return pool
}
