"use server";

import { cookies } from "next/headers";
import { decrypt } from "./jwt";

export async function setSession(token: string) {
  try {
    const res = await decrypt(token);
    const expireDate = new Date(res["payload"]["exp"] * 1000);
    cookies().set("currentUser", token, {
      httpOnly: true,
      expires: expireDate,
    });
    cookies().set("username", res.payload.username, {
      httpOnly: true,
      expires: expireDate,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getSession(): Promise<string | undefined> {
  const token = cookies().get("currentUser")?.value;
  return token;
}
export async function getUsername() {
return cookies().get('username')?.value;
}

export async function removeSession() {
  return cookies().delete("currentUser");
}
