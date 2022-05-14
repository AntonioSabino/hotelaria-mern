import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

//Create a hotel
router.post("/", createHotel);

//Updata a hotel
router.put("/:id", updateHotel);

//Delete a hotel
router.delete("/:id", deleteHotel);

//Get a hotel by id
router.get("/:id", getHotel);

//Get all hotels
router.get("/", getHotels);

export default router;
