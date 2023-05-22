import express from "express";
import mysql from "mysql";
import cors from "cors";

// Create an Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Function to query the database
function queryDatabase(query, values, callback) {
    // Create a connection to the MySQL database
    const database = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "test",
        port: 3306 
    });

    // Execute the query with provided values
    database.query(query, values, (err, data) => {
        // Always close the database connection when we're done
        database.end();
        callback(err, data);
    });
}

// Root endpoint
app.get("/", (req, res) => {
    res.json("Hello this is the backend!");
});

// Endpoint to fetch all books
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    queryDatabase(q, [], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Endpoint to create a new book
app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `description`, `price`, `cover`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.description,
      req.body.price,
      req.body.cover,
    
    ];
    queryDatabase(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Start the server
app.listen(8800, () => {
    console.log("App is connected to backend ---*** @PORT :8800 ***---");
});
