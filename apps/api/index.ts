import express from "express";
import indexRouter from "./routes/indexRouter";
import apiRouter from "./routes/apiRouter";

const app = express();
const port = process.env.PORT || 3000;

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Senre API listening on port ${port}`);
});
