import * as variables from "./variables";
import axios from "axios";

/**
 * Exchange code from callback for a real access token.
 * DON'T FORGET TO VALIDATE THE STATE FIRST!
 * @param callbackCode Code from the callback
 * @returns The user's access token
 **/
const exchangeCodeForAccess = async (callbackCode: string): Promise<string> => {
  const params = {
    grant_type: "authorization_code",
    code: callbackCode,
    redirect_uri: variables.redirect_uri,
  };
  const config = {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  };

  try {
    const res = await axios.postForm(
      "https://accounts.spotify.com/api/token",
      params,
      config
    );

    return Promise.resolve("i am token");
  } catch (err) {
    console.error(err);
    return Promise.reject("Error in requesting Spotify for access token");
  }
};

export { exchangeCodeForAccess };
