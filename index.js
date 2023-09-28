import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const data = [];

// GENERATE RESERVATIONS
app.get("/", async (req, res) => {
  res.json({
    msg: "información guardada",
    data: data,
  });
});

app.post("/create", (req, res) => {
  data.push("helloworld");
  res.json({
    msg: "reservación agregada",
  });
});

// READ RESERVATIONS

app.listen(3005, () => console.log("servidor encendido"));
