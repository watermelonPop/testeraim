const { sql } = require('@vercel/postgres');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const result = await sql`INSERT INTO users (username) VALUES (${'test name'}) RETURNING *`;
      res.status(200).json({ message: 'User inserted successfully', user: result.rows[0] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
