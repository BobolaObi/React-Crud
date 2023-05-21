import express from "express";
import mysql from "mysql";

const app = express();

function queryDatabase(query, values, callback) {
    const database = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });

    database.query(query, values, (err, data) => {
        // Always close the database connection when we're done
        database.end();
        callback(err, data);
    });
}
// Define routes and middleware
app.get("/", (req, res) =>{
    res.json("Hello this is the backend!")
})

app.get("/books", (req, res) =>{
    const q = "SELECT * FROM books";
    database.query(q, (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res)=>{
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)"
    const values = ["Book Title", "Book Description", "book_cover.jpg"];

    database.query(q, [values], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })


})

// Start the server
app.listen(8800, () => {
  console.log("App is connected to backend ---*** @PORT :8800 ***---");
});