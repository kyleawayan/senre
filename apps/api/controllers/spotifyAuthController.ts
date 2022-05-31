import { Request, Response } from "express";
import { authCallback } from "../services/spotifyAuth/getToken";

const spotifyAuthCallback = (req: Request, res: Response) => {
  const someVariable = authCallback();
  res.send(someVariable);
};

export { spotifyAuthCallback };
