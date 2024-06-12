import { jwtVerify } from 'jose';
const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function decrypt(jwtToken: string): Promise<any> {
  const payload = await jwtVerify(jwtToken, SECRET_KEY);
  
  return payload;
}
