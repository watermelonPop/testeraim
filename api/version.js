const { neon } = require('@neondatabase/serverless');

const sql = neon(`postgresql://neondb_owner:npg_rKLNfH4l5paD@ep-withered-sea-a89azn47-pooler.eastus2.azure.neon.tech/neondb?sslmode=require`);

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const result = await sql`SELECT version()`;
      res.status(200).json({ version: result[0].version });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
