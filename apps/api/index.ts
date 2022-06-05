import "dotenv/config";
import express from "express";
import spotifyAuthRouter from "./routes/spotifyAuthRouter";

const app = express();
const port = process.env.PORT || 8080;

app.use("/auth", spotifyAuthRouter);

app.listen(port, () => {
  console.log(`Senre API listening on port ${port}`);
});
