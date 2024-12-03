// const http = require("http"); // Corregido 'required' a 'require'

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" }); // Opcional: Establecer encabezados
//     res.end("Hello, World!"); // Respuesta de texto plano
// });

// // Iniciar el servidor y mostrar un mensaje en la consola
// server.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });
const express = require("express"); // Importar Express
const app = express(); // Crear la aplicación

// Ruta básica
app.get("/", (req, res) => {
    res.send("Hello, World!"); // Respuesta simple
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
