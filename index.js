const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Guardar nuevo puntaje
app.post("/api/score", (req, res) => {
  const { player_name, score } = req.body;
  if (!player_name || !score) {
    return res.status(400).send("Datos incompletos");
  }

  db.query("INSERT INTO scores (player_name, score) VALUES (?, ?)", [player_name, score], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Puntaje guardado correctamente");
  });
});

// Obtener top 10 puntajes
app.get("/api/top", (req, res) => {
  db.query("SELECT player_name, score FROM scores ORDER BY score DESC LIMIT 10", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor API escuchando en http://localhost:${PORT}`));
