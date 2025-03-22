//app/api/test/route.js

import { createEncryptionService } from "@/utils/nillion/encryption";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { wallet_id, message } = await request.json();

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

    console.log("Decrypted wallet ID:", decryptedWalletId);

    const response = await axios.post(
      `https://api.privy.io/v1/wallets/${decryptedWalletId}/rpc`,
      {
        chain_type: "ethereum",
        method: "personal_sign",
        params: {
          message: message,
          encoding: "utf-8",
        },
      },
      {
        auth: {
          username: process.env.PRIVY_APP_ID,
          password: process.env.PRIVY_APP_SECRET,
        },
        headers: {
          "privy-app-id": process.env.PRIVY_APP_ID,
          "Content-Type": "application/json",
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: (error as unknown as Error).message },
      { status: 500 }
    );
  }
}
