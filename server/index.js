import express from "express";
import { config } from "dotenv";
import { generateBrief } from "./grok.js";
config();

const app = express();
app.use(express.json());
app.use(express.static("../client/dist"));

app.post("/api/brief", async (req, res) => {
  const brief = await generateBrief(req.body);
  res.json({ brief });
});

app.listen(3001, () => console.log("API → http://localhost:3001"));
