import { x25519 } from "@noble/curves/ed25519.js";
import { argon2id } from "@noble/hashes/argon2.js";

export async function deriveKeypair(password: string, saltKdf: Uint8Array) {
  const salt = saltKdf ?? crypto.getRandomValues(new Uint8Array(16));

  const seed = argon2id(password, salt, {
    t: 3,
    m: 65536,
    p: 4,
    dkLen: 32,
  });

  const privateKey = seed;
  const publicKey = x25519.getPublicKey(privateKey);

  return { privateKey, publicKey, saltKdf };
}
