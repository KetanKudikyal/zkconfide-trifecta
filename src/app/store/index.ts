import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BearState {
  wallet: string | null;
  walletId: string[] | null;
  setWallet: (wallet: string) => void;
  setWalletId: (walletId: string[]) => void;
  policyId: string | null;
  setPolicyId: (policyId: string | null) => void;
}

const useWalletStore = create<BearState>()(
  persist(
    (set) => ({
      wallet: null,
      walletId: null,
      setWallet: (wallet: string | null) => set({ wallet }),
      setWalletId: (walletId: string[] | null) => set({ walletId: walletId }),
      policyId: null,
      setPolicyId: (policyId: string | null) => set({ policyId }),
    }),
    {
      name: "bear-storage",
    }
  )
);

export default useWalletStore;
