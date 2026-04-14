const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql-30c9cb90-mysql-lab-project-bagao1.e.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_wBo_Rf_Fv0rWXVunw5q",
  database: "defaultdb",
  port: "18240"
});

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if(err) throw err;
    res.send("Database Connected Successfully: " + result[0]["NOW()"]);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
