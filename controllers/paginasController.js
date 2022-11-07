import { Testimonial } from "../models/Testimonial.js";
import { Viaje } from "../models/Viaje.js";

const homePage = async (req, res) => {
  // Consultar 3 viajes del modelo de Viaje
  const promiseDB = [];

  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({ limit: 3 }));
  try {
    const resultado = await Promise.all( promiseDB ) ;
    console.log(resultado[0]);
    res.render("inicio", {
      page: "Inicio",
      clase: "home",
      travels: resultado[0],
      testimonials: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const aboutUsPage = (req, res) => {
  res.render("nosotros", {
    page: "Nosotros",
  });
};

const travelPage = async (req, res) => {
  // Consultar BD
  const travels = await Viaje.findAll();
  res.render("viajes", {
    page: "Viajes",
    travels,
  });
};

const travelDetailpage = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render("viaje", {
      page: "Información Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

const testimonialsPage = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.render("testimoniales", {
      page: "Testimoniales",
      testimonials,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  homePage,
  aboutUsPage,
  travelPage,
  testimonialsPage,
  travelDetailpage,
};
