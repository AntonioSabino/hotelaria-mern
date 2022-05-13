import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Rodando em ${process.env.BASE}`);
});
