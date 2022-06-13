import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useWallet } from "hooks";

import { useRouter } from 'next/router'


export const Sidebar = () => {
  return (
    <>
      <div className="w-64 text-white px-4 mt-10">
        <p className="text-sm mb-4 mt-8">YOUR MONEY</p>
        <ul className="pl-4 font-bold cursor-pointer">
          <li className="mt-2">Dashboard</li>0
          <li className="mt-2">Swap</li>
          <li className="mt-2">Transaction History</li>
          <li className="mt-2">NFT Galary</li>
          <li className="mt-2">Earning from votes</li>
        </ul>

        <p className="text-sm mb-4 mt-8">DISCOVER SERVICE LINES</p>
        <ul className="pl-4 font-bold cursor-pointer">
          <li className="mt-2">S1 - Medical Research</li>
          <li className="mt-2">S2 - Natural Disasters</li>
          <li className="mt-2">S3 - Innovative Startups</li>
          <li className="mt-2">Help request</li>
          <li className="mt-2">Reserve Fund</li>
          <li className="mt-2">Last projects</li>
        </ul>

        <p className="text-sm mb-4 mt-8">GET HELP / PARTICIPATE</p>
        <ul className="pl-4 font-bold cursor-pointer">
          <li className="mt-2">Docs</li>
          <li className="mt-2">Join Discord</li>
          <li className="mt-2">Make a suggestion</li>
          <li className="mt-2">DAO </li>
        </ul>
      </div>
    </>
  );
};
