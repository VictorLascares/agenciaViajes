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

const travelPage = (req, res) => { 
  res.render("viajes", {
    page: "Viajes"
  });
}

const testimonialsPage =  (req, res) => { 
  res.render("testimoniales", {
    page: "Testimoniales"
  });
}


export { homePage, aboutUsPage, travelPage, testimonialsPage };
