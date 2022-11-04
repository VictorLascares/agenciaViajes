import { Viaje } from "../models/Viaje.js";

const homePage = (req, res) => {
  res.render("inicio", {
    page: "Inicio",
  });
};

const aboutUsPage = (req, res) => {  
  res.render("nosotros", {
    page: "Nosotros"
  });
} 

const travelPage = async (req, res) => { 
  // Consultar BD
  const viajes = await Viaje.findAll();
  console.log(viajes);
  res.render("viajes", {
    page: "Viajes",
    viajes
  });
}

const testimonialsPage =  (req, res) => { 
  res.render("testimoniales", {
    page: "Testimoniales"
  });
}


export { homePage, aboutUsPage, travelPage, testimonialsPage };
