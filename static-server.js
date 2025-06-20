const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "privacy-policy.html"));
});

app.get("/terms", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "terms.html"));
});

app.get("/", (req, res) => {
  res.send("Servidor de políticas funcionando correctamente.");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});