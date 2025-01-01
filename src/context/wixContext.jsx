"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const myWixClient = createClient({
  modules: {
    products,
    collections,
    // currentCart
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_WIX_PUBLIC_CLIENT_ID,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export const WixClientContext = createContext(myWixClient);

export const WixClientContextProvider = (children)  =>{
    return (
        <WixClientContext.Provider value={myWixClient}>{children}</WixClientContext.Provider>
    )
}
