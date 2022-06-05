import { Request, Response } from "express";
import { exchangeCodeForAccess } from "../services/spotifyAuth/getToken";

/**
 * Get the access token from the callback code.
 **/
const spotifyAuthCallback = (req: Request, res: Response) => {
  const callbackCode = req.query.code;
  const requestedState = req.query.state;
  const clientState = req.cookies?.state;

  console.log(req.cookies);

  if (
    !callbackCode ||
    !requestedState ||
    !clientState ||
    typeof callbackCode != "string"
  ) {
    res.status(400);
    res.json({
      error: "Missing callback code or state from Spotify or client",
    });
    return;
  }

  const token = exchangeCodeForAccess(callbackCode);
  res.send(token);
};

export { spotifyAuthCallback };
