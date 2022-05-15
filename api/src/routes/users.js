import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

//Updata a Users
router.put("/:id", updateUser);

//Delete a User
router.delete("/:id", deleteUser);

//Get a User by id
router.get("/:id", getUser);

//Get all Users
router.get("/", getUsers);

export default router;
