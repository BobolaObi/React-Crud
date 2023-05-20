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

// Start the server
app.listen(8800, () => {
  console.log("App is connected to backend ---*** @PORT :8800 ***---");
});