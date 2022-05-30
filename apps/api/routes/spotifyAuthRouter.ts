import { Router } from "express";
import crypto from "crypto";
const spotifyAuthRouter = Router();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

if (!client_id || !client_secret) {
  throw "Spotify Client ID or Client Secret not entered";
}

if (!redirect_uri) {
  throw "Spotify redirect URI not entered";
}

spotifyAuthRouter.get("/login", (req, res, next) => {
  const state = crypto.randomBytes(8).toString("hex");
  const scope = "user-read-currently-playing user-modify-playback-state";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  const params = authUrl.searchParams;
  params.append("response_type", "code");
  params.append("client_id", client_id);
  params.append("scope", scope);
  params.append("redirect_uri", redirect_uri);
  params.append("state", state);

  res.redirect(authUrl.toString());
});

export default spotifyAuthRouter;
