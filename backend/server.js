import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)

app.get("/", (req, res) => res.send("API is working"));
app.listen(port, () => console.log(`Server is running on ${port}`));
