"use server";


import { removeSession } from './session';

export async function logout() {
  await  removeSession();

}
