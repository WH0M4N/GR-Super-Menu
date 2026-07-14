import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.ADMIN_SECRET!);

export async function createToken() {
  return await new SignJWT({ admin: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);

    return payload.admin === true;
  } catch {
    return false;
  }
}

export async function verifyAdmin() {
  const cookieStore = await cookies();

  const token = cookieStore.get("admin-session")?.value;

  if (!token) {
    return false;
  }

  return verifyToken(token);
}
