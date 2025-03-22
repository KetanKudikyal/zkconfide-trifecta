//app/api/test/route.js

import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name } = await request.json();
  try {
    if (!process.env.PRIVY_APP_ID || !process.env.PRIVY_APP_SECRET) {
      throw new Error("Privy app ID and secret are not set");
    }
    const response = await axios.post(
      "https://api.privy.io/v1/policies",
      {
        version: "1.0",
        name: name,
        chain_type: "ethereum",
        method_rules: [
          {
            method: "eth_sendTransaction",
            rules: [
              {
                name: "Allowlist USDC",
                conditions: [
                  {
                    field_source: "ethereum_transaction",
                    field: "to",
                    operator: "eq",
                    value: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC contract address
                  },
                ],
                action: "ALLOW",
              },
            ],
          },
        ],
        default_action: "DENY",
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
