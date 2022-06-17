import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { useWallet } from "hooks";
import { PageContainer, Button } from "components";
import Link from 'next/link'

import { Sidebar } from "components";

export default function Dashboard() {

  return (
    <PageContainer>

      <div className="flex">
        <Sidebar />

        <div className="w-full p-20">
          <div className="rounded-2xl bg-zinc-900 p-10 w-full  flex">
            <div className="w-1/4 border-r border-gray-600 pr-10">
              <div className="text-left">
                <p className="text-gray-400">Circulating Supply</p>
                <p className="text-purple-600 pl-10 font-bold text-4xl">1.2 M</p>
                <p className="text-gray-400 pl-10">of 2.0 M: <span className="text-purple-500 text-xl">60%</span></p>
              </div>
              
              <div className="text-left mt-10">
                <p className="text-gray-400">Active Stake</p>
                <p className="text-purple-600 pl-10 font-bold text-4xl">800,5 K </p>
                <p className="text-gray-400 pl-10">of 2.0 M: <span className="text-purple-500 text-xl">40.1%</span></p>
              </div>
            </div>
            <div className="w-3/4 pl-10">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400">WFC Price</p>
                  <p className="text-purple-600 pl-10 font-medium text-4xl">$ 0.025</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-right">24H Volume ($) <span className="text-purple-600 font-medium text-4xl">1.8M</span></p>
                  <p className="text-gray-400 text-right">Market Cap in USD (fully diluted) <span className="text-purple-600 font-medium text-4xl">2.8M</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl mt-10 bg-zinc-900 p-10 w-full  flex">
            <div className="w-1/4 border-r border-gray-600 pr-10">
              <div className="text-left">
                <p className="text-gray-400">Total Voting</p>
                <p className="text-purple-600 pl-10 font-bold text-4xl">489</p>
              </div>
              
              <div className="text-left mt-10">
                <p className="text-gray-400">Total Votes</p>
                <p className="text-purple-600 pl-10 font-bold text-4xl">1,894,652</p>
              </div>
            </div>
            <div className="w-3/4 pl-10 text-center">
                <p className="text-purple-600 pl-10 font-bold text-4xl">DAO votes</p>
            </div>
          </div>
        </div>

      </div>



    </PageContainer>
  );
}
