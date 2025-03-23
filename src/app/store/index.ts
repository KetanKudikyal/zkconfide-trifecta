import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BearState {
  wallet: string | null;
  setWallet: (wallet: string) => void;
  policyId: string | null;
  setPolicyId: (policyId: string | null) => void;
}

const useWalletStore = create<BearState>()(
  persist(
    (set) => ({
      wallet: null,
      setWallet: (wallet: string | null) => set({ wallet }),
      policyId: null,
      setPolicyId: (policyId: string | null) => set({ policyId }),
    }),
    {
      name: "bear-storage",
    }
  )
);

export default useWalletStore;
