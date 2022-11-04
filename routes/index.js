import express from "express";
import { homePage, aboutUsPage, travelPage, testimonialsPage, travelDetailpage } from "../controllers/paginasController.js";

const router = express.Router();

router.get("/", homePage);
router.get("/nosotros", aboutUsPage);
router.get("/viajes", travelPage);
router.get("/viajes/:slug", travelDetailpage);
router.get("/testimoniales", testimonialsPage);

export default router;