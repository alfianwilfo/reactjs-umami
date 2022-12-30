const express = require("express");
const app = express();
const port = 3000;
let routes = require("./routes/index");
app.use("/");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
