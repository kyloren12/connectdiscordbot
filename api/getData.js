const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql.db.bot-hosting.net',
  user: 'u345954_ifszuVKi0q',
  password: 'hxyyJ7aVN8eNch@OE+fjbp.F',
  database: 's345954_Testing',
  port: 3306
});

module.exports = async (req, res) => {
  db.query('SELECT * FROM your_table_name', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data from database.');
      return;
    }
    res.status(200).json(results);
  });
};
