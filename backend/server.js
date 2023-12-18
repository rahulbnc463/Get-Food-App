const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnect");

dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api/user", require("./Routes/RegisterUser"));
app.get("/", (req, res) => {
  res.send("Hello from Server Port Number");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
