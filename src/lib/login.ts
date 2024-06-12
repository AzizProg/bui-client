"use server";

import { setSession } from "@/lib/session";

export async function login(username: string, password: string): Promise<string> {
  console.log("env:"+process.env.API_BASE_URL)
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/collaborators/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const res = await response.json();
      await setSession(res.access_token);
      return "Login successful!";
    } else {
      switch (response.status) {
        case 404:
          return "User not found";
        case 403:
          return "Incorrect password";
        default:
          return "Server not available, please try later";
      }
    }
  } catch (error) {
    console.error(error);
    return "An error occurred, please try again later";
  }
}
