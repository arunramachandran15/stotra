const path = require("path");
const morgan = require("morgan"); //import morgan
const { log } = require("mercedlogger"); // import mercedlogger's log function
const cors = require("cors");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3010;

const Database = require("./db");
const UserSchema = require("./db").UserSchema;

// Middleware
app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/stocks", require("./routes/stocks"));

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT, async () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});