//app/api/test/route.js

import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, maxAmount, owner } = await request.json();
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
                name: "Restrict USDC transfers on Sepolia",
                conditions: [
                  {
                    field_source: "ethereum_transaction",
                    field: "to",
                    operator: "eq",
                    value: "0xf08A50178dfcDe18524640EA6618a1f965821715", // USDC contract address
                  },
                  {
                    field_source: "ethereum_calldata",
                    field: "transfer.amount",
                    abi: [
                      {
                        inputs: [
                          {
                            internalType: "address",
                            name: "recipient",
                            type: "address",
                          },
                          {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256",
                          },
                        ],
                        name: "transfer",
                        outputs: [
                          {
                            internalType: "bool",
                            name: "",
                            type: "bool",
                          },
                        ],
                        stateMutability: "nonpayable",
                        type: "function",
                      },
                    ],
                    operator: "lte",
                    value: maxAmount,
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
    console.error(error);
    return NextResponse.json(
      { error: (error as unknown as Error).message },
      { status: 500 }
    );
  }
}
