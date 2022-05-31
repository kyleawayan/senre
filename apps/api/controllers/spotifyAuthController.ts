import { Request, Response } from "express";
import { handleCallback } from "../services/spotifyAuth/getToken";

const spotifyAuthCallback = (req: Request, res: Response) => {
  const someVariable = handleCallback();
  res.send(someVariable);
};

export { spotifyAuthCallback };
