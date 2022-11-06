const saveTestimonial = (req, res) => {
  // Validar..
  const { nombre, correo, mensaje } = req.body;

  const errors = [];
  if (nombre.trim() === '') {
    errors.push({ mensaje: "El nombre esta vacio" });
  }

  if (correo.trim() === '') {
    errors.push({ mensaje: "El correo esta vacio" });
  }

  if (mensaje.trim() === '') {
    errors.push({ mensaje: "El mensaje esta vacio" });
  }

  console.log(errors);
}


export { saveTestimonial };