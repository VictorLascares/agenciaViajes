import { Testimonial } from "../models/Testimonial.js";
import { Viaje } from "../models/Viaje.js";

const homePage = async (req, res) => {
  // Consultar 3 viajes del modelo de Viaje
  try {
    const viajes = await Viaje.findAll({ limit: 3 });
    res.render("inicio", {
      page: "Inicio",
      clase: "home",
      viajes,
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
  const viajes = await Viaje.findAll();
  res.render("viajes", {
    page: "Viajes",
    viajes,
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
