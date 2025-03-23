//app/api/test/route.js

import { createEncryptionService } from "@/utils/nillion/encryption";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { wallet_id, to, value, chain_name } = await request.json();
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

    const response = await axios.post(
      `https://api.privy.io/v1/wallets/${decryptedWalletId}/rpc`,
      {
        method: "eth_sendTransaction",
        caip2: `eip155:${chainId}`,
        params: {
          transaction: {
            to: to,
            value: value,
          },
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
    console.log(error, "error");
    return NextResponse.json(
      { error: (error as unknown as Error).message },
      { status: 500 }
    );
  }
}
