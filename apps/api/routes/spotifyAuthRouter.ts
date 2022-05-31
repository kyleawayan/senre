import { Router } from "express";
import { spotifyAuthCallback } from "../controllers/spotifyAuthController";

const spotifyAuthRouter = Router();

spotifyAuthRouter.get("/callback", spotifyAuthCallback);

export default spotifyAuthRouter;
