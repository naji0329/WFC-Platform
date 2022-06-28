import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Image from "next/image";

import { useWallet } from "hooks";
import { PageContainer, Button } from "components";
import Link from "next/link";

import { Sidebar } from "components";

import anySwap from "assets/images/any.png";
import panckage from "assets/images/panckage.png";

export default function Swap() {
  return (
    <PageContainer>
      <div className="flex">
        <Sidebar />

        <div className="w-full p-20">
          <div className="rounded-4xl bg-zinc-900 p-20 flex items-center gap-6 justify-center cursor-pointer">
            <Image src={panckage} alt="logo 1" width={200} height={200} />
            <p className="text-white text-3xl font-bold">
              Swap WFC on Pancakeswap
            </p>
          </div>
          <div className="mt-10 rounded-4xl bg-zinc-900 p-20 flex items-center gap-6 justify-center cursor-pointer">
            <Image src={anySwap} alt="logo 1" width={200} height={200} />
            <p className="text-white text-3xl font-bold">Swap WFC on Uniswap</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
