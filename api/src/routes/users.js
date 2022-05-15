import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("Olá, você está logado.");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Olá, você está logado e pode apagar a sua conta.");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Olá admin, você está logado e pode apagar qualquer conta.");
});

//Updata a Users
router.put("/:id", updateUser);

//Delete a User
router.delete("/:id", deleteUser);

//Get a User by id
router.get("/:id", getUser);

//Get all Users
router.get("/", getUsers);

export default router;
