import { Router } from "express";
const apiRouter = Router();

apiRouter.get("/", (req, res, next) => {
  res.send("I'm the root of the API. I should be /api");
});

export default apiRouter;
