import { Viaje } from "../models/Viaje.js";

const homePage = (req, res) => {
  res.render("inicio", {
    page: "Inicio",
  });
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
      viaje
    })
  } catch (error) {
    console.log(error);
  }
};

const testimonialsPage = (req, res) => {
  res.render("testimoniales", {
    page: "Testimoniales",
  });
};

export {
  homePage,
  aboutUsPage,
  travelPage,
  testimonialsPage,
  travelDetailpage,
};
