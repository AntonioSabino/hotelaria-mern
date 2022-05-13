import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//Create a hotel
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Updata a hotel
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete a hotel
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Hotel.findByIdAndDelete(id);
    res.status(200).json("O hotel foi deletado.");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get a hotel by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all hotels
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
