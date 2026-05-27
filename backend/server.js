
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* MYSQL CONNECTION */
const db = mysql.createConnection({

  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME

});

/* CONNECT DATABASE */
db.connect((err) => {

  if (err) {

    console.log(err);

  } else {

    console.log("MySQL Connected Successfully ✅");

  }

});

/* TEST ROUTE */
app.get("/", (req, res) => {

  res.send("Backend Running Successfully 🚀");

});

/* CONTACT API */
app.post("/api/contact", (req, res) => {


  
  const {
    first_name,
    last_name,
    email,
    company,
    website,
    service,
    budget,
    message
  } = req.body;

  const sql = `
    INSERT INTO contacts
    (
      first_name,
      last_name,
      email,
      company,
      website,
      service,
      budget,
      message
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(

    sql,

    [
      first_name,
      last_name,
      email,
      company,
      website,
      service,
      budget,
      message
    ],

    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json({
          message: "Failed to save contact"
        });

      }

      res.status(200).json({
        success: true,
        message: "Contact Saved Successfully ✅"
      });

    }

  );

});

const PORT = 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});