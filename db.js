const sqlite3 = require("sqlite3");

// Create a new SQLite database or open it if it already exists
// The database is stored in the file 'todo.db'
const db = new sqlite3.Database("./todo.db", err => {
  // If there was an error opening the database, log the error message
  if (err) {
    console.error(err.message);
  } else {
    // If the database was opened successfully, log a success message
    console.log("Connected to the database.");

    // Run a SQL command to create a new table named 'todos' if it doesn't exist already
    // The table has three columns: id (integer and primary key), task (text and not null), and completed (boolean with default value false)
    db.run(`CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task TEXT NOT NULL,
            completed BOOLEAN DEFAULT FALSE
        )`);
  }
});

// Export the database instance for use in other modules
module.exports = db;
