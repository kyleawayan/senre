const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

if (!client_id || !client_secret) {
  throw "Spotify Client ID or Client Secret not entered";
}

if (!redirect_uri) {
  throw "Spotify redirect URI not entered";
}

export { client_id, client_secret, redirect_uri };
