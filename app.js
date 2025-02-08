require('dotenv').config();

const { neon } = require('@neondatabase/serverless');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sql = neon(`postgresql://neondb_owner:npg_rKLNfH4l5paD@ep-withered-sea-a89azn47-pooler.eastus2.azure.neon.tech/neondb?sslmode=require`);

async function getPgVersion() {
  const result = await sql`SELECT version()`;
  console.log(result[0]);
}

getPgVersion();