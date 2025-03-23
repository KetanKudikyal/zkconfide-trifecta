//app/api/test/route.js

import { createEncryptionService } from "@/utils/nillion/encryption";
import { NextResponse } from "next/server";

async function sendTransaction({
  walletId,
  to,
  value,
  data,
  chainId = "84532", // Default to Base
}: {
  walletId: string;
  to: string;
  value: number;
  data: string;
  chainId?: string;
}) {
  const privyAppId = "cm8keo951005iaizsexhfgy4r"; // Replace with your actual app ID
  const privyAppSecret =
    "5AFk2gtSPQE5Z4z2sAfaX3v3n8vTZfs1ir3otngQvAG3bGJxensNwMdwA3Z4FDyfJA4VfZ7mDSaqyn7cBr4sbxjd"; // Replace with your actual secret

  // Create basic auth credentials
  const credentials = btoa(`${privyAppId}:${privyAppSecret}`);

  const response = await fetch(
    `https://api.privy.io/v1/wallets/${walletId}/rpc`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "privy-app-id": privyAppId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        method: "eth_sendTransaction",
        caip2: `eip155:${chainId}`,
        params: {
          transaction: {
            to,
            value,
            data,
          },
        },
      }),
    }
  );

  return response.json();
}

export async function POST(request: Request) {
  const { wallet_id, to, value, chain_name, data } = await request.json();
  try {
    const encryptionService = await createEncryptionService({
      nodes: 3,
      operations: { store: true },
    });

    if (!process.env.PRIVY_APP_ID || !process.env.PRIVY_APP_SECRET) {
      throw new Error("Privy app ID and secret are not set");
    }
    const decryptedWalletId = await encryptionService.decryptPassword(
      wallet_id
    );

    console.log("decryptedWalletId", decryptedWalletId);

    const chainId = chain_name === "sepolia" ? "11155111" : "84532";

    const result = await sendTransaction({
      walletId: "f008oc6q7uzb9r16w6kyssol",
      to: "0x0F284B92d59C8b59E11409495bE0c5e7dBe0dAf9",
      data: data,
      value: 100000,
    });

    const { hash } = result.data;
    return NextResponse.json({ hash });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json(
      { error: (error as unknown as Error).message },
      { status: 500 }
    );
  }
}
