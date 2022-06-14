const http = require("http");
const app = require("./app");

const PORT = 8000;

const { loadData } = require("./model/interactions.model");

const server = http.createServer(app);

async function startServer() {
  await loadData();

  server.listen(PORT, () => {
    console.log(`Listenning to port: ${PORT}`);
  });
}

startServer();
