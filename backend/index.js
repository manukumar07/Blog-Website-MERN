const express = require("express");
const app = express();
const connectDb = require("./config/db");
const router = require("./routes/auth-route");
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/auth/", router);

connectDb();

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
