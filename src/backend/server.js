/* eslint-disable no-undef */

import express from "express";
import dotenv from "dotenv";
import { Usemail } from "../hooks/Usemail.js";

const app = express();
app.use(express.json());

dotenv.config();

app.options("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

  res.status(200).send()
})

export const startServer = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port 3000`);
  });

  app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.json("Hola mundo")
  })

  app.post("/", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const {input1, input2, input3} = req.body
    Usemail(
      input1,
      input2,
      input3
    )

    res.json("Datos enviados correctamente!!")
  });
}