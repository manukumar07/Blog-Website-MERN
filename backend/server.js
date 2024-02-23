const express = require("express");
const app = express();
const router = require("./routes/auth-routes");
const connectDb = require("./config/db");

const port = 3000;

// Use the routes
app.use("/auth/", router);
app.use("/auth/", router);

// app.get("/", (req, res) => {
//   res.status(200).json("hello world");
// });

// start the server
connectDb();

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
