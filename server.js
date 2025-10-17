const express = require("express");
const fs = require("fs-extra");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const dataPath = path.join(__dirname, "data", "portafolio.json");
const uploadsDir = path.join(__dirname, "public", "uploads");

// ensure uploads dir exists
fs.ensureDirSync(uploadsDir);

// configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // keep original name with timestamp prefix
    const safeName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, safeName);
  }
});
const upload = multer({ storage: storage });

// Obtener todos los proyectos
app.get("/api/portafolio", async (req, res) => {
  try {
    const data = await fs.readJson(dataPath);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error leyendo datos" });
  }
});

// Agregar nuevo proyecto (con imagen subida)
app.post("/api/portafolio", upload.single("imagen"), async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    let imagenPath = "";
    if (req.file) {
      // ruta relativa para servir desde /public
      imagenPath = "uploads/" + path.basename(req.file.path);
    } else if (req.body.imagenUrl) {
      imagenPath = req.body.imagenUrl;
    }

    const nuevoProyecto = {
      titulo: titulo || "Sin título",
      descripcion: descripcion || "",
      imagen: imagenPath
    };

    let data = [];
    try {
      data = await fs.readJson(dataPath);
      if (!Array.isArray(data)) data = [];
    } catch (e) {
      data = [];
    }

    data.unshift(nuevoProyecto); // agregar al inicio
    await fs.writeJson(dataPath, data, { spaces: 2, encoding: "utf-8" });

    res.json({ message: "Proyecto agregado correctamente", proyecto: nuevoProyecto });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al guardar el proyecto" });
  }
});

app.listen(PORT, () => console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`));