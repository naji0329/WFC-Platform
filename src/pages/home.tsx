import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { useWallet } from "hooks";
import { PageContainer, Button } from "components";
import Link from 'next/link'

import { Sidebar } from "components";

export default function Home() {
  const [web3, setWeb3] = useState<Web3>(null);
  const [isConnected, setIsConnected] = useState(false);

  const { wallet, setWallet } = useWallet();

  return (
    <PageContainer>
      <Sidebar />

    </PageContainer>
  );
}
