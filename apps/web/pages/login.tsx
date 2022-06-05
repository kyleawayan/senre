import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import crypto from "crypto";

interface LoginPageProps {
  auth_url: string;
  auth_state: string;
}

export default function Login({ auth_url, auth_state }: LoginPageProps) {
  useEffect(() => {
    if (window) {
      document.cookie = `auth_state=${auth_state}`;
    }
  }, [auth_state]);

  return (
    <div>
      <a href={auth_url}>Log In With Spotify</a>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // TODO: Just put the client ID as an env...
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/client_id`
  );

  const client_id = res.data.client_id;

  const state = crypto.randomBytes(8).toString("hex");
  const scope = "user-read-currently-playing user-modify-playback-state";
  const authUrl = new URL("https://accounts.spotify.com/authorize");
  const redirect_uri = `${process.env.NEXT_PUBLIC_API_URL}/auth/callback`;

  const params = authUrl.searchParams;
  params.append("response_type", "code");
  params.append("client_id", client_id);
  params.append("scope", scope);
  params.append("redirect_uri", redirect_uri);
  // TODO: Make state on client
  params.append("state", state);

  return {
    props: {
      auth_url: authUrl.toString(),
      auth_state: state,
    },
  };
};
