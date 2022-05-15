import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create a hotel
router.post("/:hotelId", verifyAdmin, createRoom);

//Updata a hotel
router.put("/:id", verifyAdmin, updateRoom);

//Delete a hotel
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//Get a hotel by id
router.get("/:id", getRoom);

//Get all hotels
router.get("/", getRooms);

export default router;
