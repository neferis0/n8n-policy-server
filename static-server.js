const express = require('express');
const path = require('path');
const app = express();

// Sirve todo lo que esté en la carpeta /public
app.use(express.static(path.join(__dirname, 'public')));

// El servidor corre en el puerto 3001
app.listen(3001, () => {
  console.log('Static server running on http://localhost:3001');
});
