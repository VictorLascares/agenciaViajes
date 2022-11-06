const saveTestimonial = (req, res) => {
  // Validar..
  const { nombre, correo, mensaje } = req.body;

  const errors = [];
  if (nombre.trim() === "") {
    errors.push({
      input: "nombre",
      message: "El nombre es un campo obligatorio",
    });
  }

  if (correo.trim() === "") {
    errors.push({
      input: "correo",
      message: "El correo es un campo obligatorio",
    });
  }

  if (mensaje.trim() === "") {
    errors.push({
      input: "mensaje",
      message: "El mensaje es un campo obligatorio",
    });
  }

  if (errors.length > 0) {
    // Mostrar la vista con errores
    res.render("testimoniales", {
      page: "Testimoniales",
      errors,
      nombre,
      correo,
      mensaje
    });
  } else {
    // Almacenarlo en la base de datos
    
  }
};

export { saveTestimonial };
