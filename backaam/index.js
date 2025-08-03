const express = require('express'); //Login
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4030; // Updated port number to 4030

app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
  user: 'system',
  password: 'bhavana',
  connectString: 'localhost:1521/xeXDB' // Ensure this matches your Oracle DB connection details
};


// Fetch data
app.get('/api/data', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM log');
    // Map rows with proper keys based on your table structure
    const data = result.rows.map((row) => ({
      id: row[0], // Adjust indices based on the column order in the table
      NAME: row[1],
      EMAIL: row[2],
      PASSWORD: row[3],
    }));
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  } finally {
    if (connection) await connection.close();
  }
});


// Insert data
app.post('/api/data', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const { name, email, password } = req.body; // Fields as name, email, password
    await connection.execute(
      'INSERT INTO log (name, email, password) VALUES (:name, :email, :password)', // Table name 'log'
      [name, email, password],
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
app.put('/api/data/:id', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const { name, email, password } = req.body; // Fields as name, email, password
    await connection.execute(
      'UPDATE log SET name = :name, email = :email, password = :password WHERE id = :id', // Table name 'log'
      [name, email, password, req.params.id],
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

// Delete data
app.delete('/api/data/:id', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    await connection.execute(
      'DELETE FROM log WHERE id = :id', // Table name 'log'
      [req.params.id],
      { autoCommit: true }
    );
    res.send('Data deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting data');
  } finally {
    if (connection) await connection.close();
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // Updated port number to 4030
});
