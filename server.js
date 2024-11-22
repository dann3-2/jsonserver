const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Gunakan middleware bawaan JSON Server
server.use(middlewares);

// Gunakan router dari file db.json
server.use(router);

// Jalankan server
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
