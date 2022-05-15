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

//Create a room
router.post("/:hotelId", verifyAdmin, createRoom);

//Updata a room
router.put("/:id", verifyAdmin, updateRoom);

//Delete a room
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//Get a room by id
router.get("/:id", getRoom);

//Get all rooms
router.get("/", getRooms);

export default router;
