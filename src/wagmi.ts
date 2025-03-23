import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { baseSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "zkConfide",
  projectId: "YOUR_PROJECT_ID",
  chains: [baseSepolia],
  ssr: true,
});
