import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./src/routes/auth.js";
import usersRoute from "./src/routes/users.js";
import hotelsRoute from "./src/routes/hotels.js";
import roomsRoute from "./src/routes/rooms.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB desconectado!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB conectado!");
});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Rodando em ${process.env.BASE}`);
});
