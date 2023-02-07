const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

//connexion bd
connectDB();

const app = express();

// middleware qui permet de traiter les données de la requetes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//autorisation cors
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://main.d2wm82z7eycdse.amplifyapp.com/",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//nos routes
app.use("/api/v1", require("./routes/task.routes"));

// lancer le server
app.listen(port, () => console.log("le serveur à démarré au port " + port));
