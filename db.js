const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // cambia si usas otro
  password: "Rogierotm20", // tu contraseña real
  database: "flappybird"
});

db.connect((err) => {
  if (err) throw err;
  console.log("🟢 Conectado a la base de datos MySQL");
});

module.exports = db;
