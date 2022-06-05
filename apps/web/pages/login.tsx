import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Login() {
  const [authLink, setAuthLink] = useState("");

  useEffect(() => {
    const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;

    if (!client_id) {
      throw "Spotify Client ID not supplied";
    }

    const state = uuid();
    const scope = "user-read-currently-playing user-modify-playback-state";
    const authUrl = new URL("https://accounts.spotify.com/authorize");
    const redirect_uri = `${process.env.NEXT_PUBLIC_API_URL}/auth/callback`;

    const params = authUrl.searchParams;
    params.append("response_type", "code");
    params.append("client_id", client_id);
    params.append("scope", scope);
    params.append("redirect_uri", redirect_uri);
    params.append("state", state);

    if (window) {
      document.cookie = `auth_state=${state}`;
    }

    // TODO: Disable link until authUrl is ready
    setAuthLink(authUrl.toString());
  }, []);

  return (
    <div>
      <a href={authLink}>Log In With Spotify</a>
    </div>
  );
}
