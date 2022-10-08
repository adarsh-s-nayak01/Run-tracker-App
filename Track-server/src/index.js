require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/autoRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");


const app = express()
app.use(bodyParser.json());
//have bodypareser first.
app.use(authRoutes);
app.use(trackRoutes);


const mongoUri = 'mongodb+srv://adarshnayak:bangalore@cluster0.4kqfhyk.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(mongoUri);

// mongoose.connect(mongoUri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   });

//to check for the successful connection
mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
  });
  mongoose.connection.on("error", (err) => {
    console.error("Error connecting to mongo", err);
  });
  
  app.get("/", requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
  });
  
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });