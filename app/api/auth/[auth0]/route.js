// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin, handleCallback } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export const GET = handleAuth({
  callback: handleCallback({ redirectUri: 'http://localhost:3000/login' })
,
  login: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
    },
    returnTo: "http://localhost:3000/login",
  }),
});
