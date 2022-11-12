const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const routes = require("./routes/index.js");

//Conficuracones
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.PORT || 4000);

//Software intermedio (Middlewares)
app.use((req, res, next) => {
  console.log(`${req.url} - ${req.method}`);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//rutas
app.use(routes);

//archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//Iniciar el Servidor
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
