import { Router } from "express";
const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.send("Hello world!");
});

export default indexRouter;
