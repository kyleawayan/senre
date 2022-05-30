import "dotenv/config";
import express from "express";
import indexRouter from "./routes/indexRouter";
import apiRouter from "./routes/apiRouter";
import spotifyAuthRouter from "./routes/spotifyAuthRouter";

const app = express();
const port = process.env.PORT || 3000;

app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/auth", spotifyAuthRouter);

app.listen(port, () => {
  console.log(`Senre API listening on port ${port}`);
});
