//app/api/test/route.js

import { createEncryptionService } from "@/utils/nillion/encryption";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    if (!process.env.PRIVY_APP_ID || !process.env.PRIVY_APP_SECRET) {
      throw new Error("Privy app ID and secret are not set");
    }
    const response = await fetch("https://api.privy.io/v1/wallets", {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(
          process.env.PRIVY_APP_ID + ":" + process.env.PRIVY_APP_SECRET
        )}`,
        "privy-app-id": process.env.PRIVY_APP_ID,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    const encryptionService = await createEncryptionService({
      nodes: 3,
      operations: { store: true },
    });
    const encryptedWalletId = await encryptionService.encryptPassword(data.id);
    const formatted = encryptedWalletId.map((share) => share.toString());
    const decryptedWalletId = await encryptionService.decryptPassword(
      formatted
    );

    const { id, ...responseDataWithoutId } = data;

    return NextResponse.json({
      ...responseDataWithoutId,
      wallet_id: encryptedWalletId,
      decryptedWalletId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as unknown as Error).message },
      { status: 500 }
    );
  }
}
