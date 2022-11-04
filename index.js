import express from "express";
import router from "./routes/index.js";

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set("view engine", "pug");

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.currentYear = year.getFullYear();
  res.locals.websiteName = "Agencia de Viajes";
  return next();
});

// Definir la carpeta publica
app.use(express.static("public"));

// Agregar router
app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor es funcionando en el puerto ${port}`);
});
