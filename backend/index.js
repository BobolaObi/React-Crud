import express from "express";
import mysql from "mysql";

const app = express();
const database = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

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

// Start the server
app.listen(8800, () => {
  console.log("App is connected to backend ---*** @PORT :8800 ***---");
});