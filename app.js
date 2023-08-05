const express = require("express");
const app = express();
const indexMiddleWare = require("./middleware/index_middleware");
indexMiddleWare(app);

exports.app = app;
const PORT = 3000;
// listenigng server

app.listen(PORT, () => {
  console.log("server up and running");
});
