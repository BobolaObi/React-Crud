import express from "express";
import mysql from "mysql";

const app = express();

function queryDatabase(query, values, callback) {
    const database = mysql.createConnection({
        host:"127.0.0.1",
        user:"root",
        password:"",
        database:"test",
        port: 3306 
    });

    database.query(query, values, (err, data) => {
        // Always close the database connection when we're done
        database.end();
        callback(err, data);
    });
}

app.get("/", (req, res) => {
    res.json("Hello this is the backend!")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    queryDatabase(q, [], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.use(express.json);

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)"
    // const values = ["Book Title", "Book Description", "book_cover.jpg"];
    queryDatabase(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("App is connected to backend ---*** @PORT :8800 ***---");
});
