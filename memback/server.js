const express = require('express'); //membership
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4060;

app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
  user: 'system',
  password: 'bhavana',
  connectString: 'localhost:1521/xeXDB',
};

// Insert data
app.post('/api/members', async (req, res) => {
  let connection;
  const { name, email, passedoutyear, phonenumber } = req.body;
  try {
    connection = await oracledb.getConnection(dbConfig);
    await connection.execute(
      'INSERT INTO membership (name, email, passedoutyear, phonenumber) VALUES (:name, :email, :passedoutyear, :phonenumber)',
      [name, email, passedoutyear, phonenumber],
      { autoCommit: true }
    );
    res.status(201).send('Data inserted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting data');
  } finally {
    if (connection) await connection.close();
  }
});

// Update data
app.put('/api/members/:id', async (req, res) => {
    let connection;
    const { name, email, passedoutyear, phonenumber } = req.body;
    try {
      connection = await oracledb.getConnection(dbConfig);
      await connection.execute(
        'UPDATE membership SET name = :name, email = :email, passedoutyear = :passedoutyear, phonenumber = :phonenumber WHERE id = :id',
        [name, email, passedoutyear, phonenumber, req.params.id],
        { autoCommit: true }
      );
      res.send('Data updated');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating data');
    } finally {
      if (connection) await connection.close();
    }
  });
  
// Get all data
app.get('/api/members/:id', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      'SELECT * FROM membership WHERE id = :id',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      res.status(404).send('Member not found');
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  } finally {
    if (connection) await connection.close();
  }
});
app.get('/api/members', async (req, res) => {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute('SELECT * FROM membership');
      const members = result.rows.map((row) => ({
        id: row[0], // Adjust these indexes based on your table schema
        name: row[1],
        email: row[2],
        passedoutyear: row[3],
        phonenumber: row[4],
      }));
      res.json(members);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching data');
    } finally {
      if (connection) await connection.close();
    }
  });
  

// Delete data
app.delete('/api/members/:id', async (req, res) => {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        'DELETE FROM membership WHERE id = :id',
        [req.params.id],
        { autoCommit: true }
      );
      if (result.rowsAffected === 0) {
        res.status(404).send('Member not found');
      } else {
        res.send('Data deleted');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting data');
    } finally {
      if (connection) await connection.close();
    }
  });
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
