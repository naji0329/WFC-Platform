import { useState } from "react";

export const useWallet = () => {
  const [wallet, setWallet] = useState("");

  return { wallet, setWallet };
};
