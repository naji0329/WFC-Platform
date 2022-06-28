import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Image from "next/image";

import { useWallet } from "hooks";
import { PageContainer, Button } from "components";
import Link from "next/link";

import { Sidebar } from "components";

import logo1 from "assets/images/1.png";
import logo2 from "assets/images/2.png";
import logo3 from "assets/images/3.png";
import logo4 from "assets/images/4.png";
import logo5 from "assets/images/5.png";
import logo6 from "assets/images/6.png";

export default function Faqs() {
  return (
    <PageContainer>
      <div className="flex">
        <Sidebar />

        <div className="w-full p-20">
          <div className="p-10">
            <p className="text-2xl text-white text-green-500">
              Frequently Asked Questions
            </p>
            <p className="text-white text-lg mt-3">
              We talk to a lot of universities, faith-based organizations and
              other charities about crypto. Here are some of the common
              questions we hear from their leadership
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-10 w-full">
            <div className="">
              <p className="text-purple-600 font-medium text-2xl">
                Why accept crypto donations?
              </p>
              <p className="text-white mt-2">
                Millennials 101,000,000 people use cryptocurrency today. And
                half of millennials prefer crypto investing to stocks. Keep up
                with the fastest-growing donor platform.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-purple-600 font-medium text-2xl">
                Why do nonprofits use World Family Coin?
              </p>
              <p className="text-white mt-2">
                Easy, Effective. We walk you through setting up an account that
                you own and control. Crypto autosells for USDT, voting power,
                DAO member, rewards,visibility, NFT .
              </p>
            </div>
            <div className="mt-4">
              <p className="text-purple-600 font-medium text-2xl">
                Okay, how do I do this?
              </p>
              <p className="text-white mt-2">
                We will guide you through everything from opening an account on
                the WFC platform, set up a fundraiser, to add our widget to your
                site, the involvement of cryptocurrency donors. We are here for
                you !.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20">
            <div className="border-green-300 border-2 rounded-3xl text-center pb-5">
              <div
                className="px-12 py-4 rounded-full border border-green-300 m-auto w-max flex justify-center items-center -mt-12"
                style={{ background: "#131313" }}
              >
                <Image src={logo1} alt="logo 1" width={70} height={70} />
              </div>

              <div className="mt-3 text-white font-medium">
                <p className="text-green-400 text-2xl font-bold">OUR TECH</p>
                <p>Faster, Easier Setup</p>
                <p>We figured out the compliance,</p>
                <p>setup and integration - so you don&lsquo;t have to.</p>
                <p>We make it easy.</p>
              </div>
            </div>
            <div className="border-green-300 border-2 rounded-3xl text-center pb-5">
              <div
                className="px-12 py-4 rounded-full border border-green-300 m-auto w-max flex justify-center items-center -mt-12"
                style={{ background: "#131313" }}
              >
                <Image src={logo2} alt="logo 2" width={70} height={70} />
              </div>

              <div className="mt-3 text-white font-medium">
                <p className="text-green-400 text-2xl font-bold">
                  OUR PLATFORM
                </p>
                <p>We have the #1 decentralized platform</p>
                <p>for fundraising and donation crypto. </p>
                <p>Crypto donors in search of crypto-friendly </p>
                <p>nonprofits find our clients..</p>
              </div>
            </div>
            <div className="border-green-300 border-2 rounded-3xl text-center pb-5">
              <div
                className="px-12 py-4 rounded-full border border-green-300 m-auto w-max flex justify-center items-center -mt-12"
                style={{ background: "#131313" }}
              >
                <Image src={logo3} alt="logo 3" width={70} height={70} />
              </div>

              <div className="mt-3 text-white font-medium">
                <p className="text-green-400 text-2xl font-bold">
                  EDUCATION E SUPPORT
                </p>
                <p>We make taking crypto easy. </p>
                <p>Still, we know nonprofits can run into</p>
                <p>hurdles. That&lsquo;s why we offer live </p>
                <p>support for all of our clients.</p>
              </div>
            </div>
            <div className="border-green-300 border-2 rounded-3xl text-center pb-5 mt-10">
              <div
                className="px-12 py-4 rounded-full border border-green-300 m-auto w-max flex justify-center items-center -mt-12"
                style={{ background: "#131313" }}
              >
                <Image src={logo4} alt="logo 3" width={70} height={70} />
              </div>

              <div className="mt-3 text-white font-medium">
                <p className="text-green-400 text-2xl font-bold">
                  AUTOMATIC CASH
                </p>
                <p>Crypto prices can be volatile.</p>
                <p>Turn on our &ldquo;Auto-Conversion&ldquo;,</p>
                <p>and crypto donations sell for USDT-BUSD</p>
              </div>
            </div>
            <div className="border-green-300 border-2 rounded-3xl text-center pb-5 mt-10">
              <div
                className="px-12 py-4 rounded-full border border-green-300 m-auto w-max flex justify-center items-center -mt-12"
                style={{ background: "#131313" }}
              >
                <Image src={logo5} alt="logo 5" width={70} height={70} />
              </div>

              <div className="mt-3 text-white font-medium">
                <p className="text-green-400 text-2xl font-bold">CHARITY NFT</p>
                <p>We have the first charity marketplace,</p>
                <p>NFTs are revolutionising the art world</p>
                <p>but they also have the potential</p>
                <p>to revolutionise the charity world too.</p>
              </div>
            </div>
            <div className="border-green-300 border-2 rounded-3xl text-center pb-5 mt-10">
              <div
                className="px-12 py-4 rounded-full border border-green-300 m-auto w-max flex justify-center items-center -mt-12"
                style={{ background: "#131313" }}
              >
                <Image src={logo6} alt="logo 6" width={70} height={70} />
              </div>

              <div className="mt-3 text-white font-medium">
                <p className="text-green-400 text-2xl font-bold">
                  MARKETING TOOLS
                </p>
                <p>The tools you need to get found by donors. </p>
                <p>Plus, research and resources </p>
                <p>you need to find donors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
