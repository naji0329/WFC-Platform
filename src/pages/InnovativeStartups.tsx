import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Image from "next/image";

import { useWallet } from "hooks";
import { PageContainer, Button } from "components";
import Link from "next/link";

import { Sidebar } from "components";

import g12901 from "assets/images/g12901.png";
import givedirectly from "assets/images/givedirectly.png";
import savechildren from "assets/images/savechildren.png";
import donor from "assets/images/donor.png";
import unicef from "assets/images/unicef.png";

export default function InnovativeStartups() {
  return (
    <PageContainer>
      <div className="flex">
        <Sidebar />

        <div className="w-full p-20">
          <div className="flex justify-between gap-10">
            <div className="p-10 w-1/2" style={{ border: "1px solid #9955ff" }}>
              <div className="text-white">
                <p
                  className="text-4xl font-medium"
                  style={{ color: "#9955ff" }}
                >
                  S3 - Innovative Startups
                </p>
                <p className="mt-3">
                  FINANCING MEDICAL RESEARCH FOR THE TREATMENT OF RARE DISEASES
                  OF GLOBAL INTEREST
                </p>

                <div className="mt-5 flex justify-between gap-5 items-center">
                  <Image src={g12901} alt="" />
                  <p className="font-medium text-sm w-full">
                    Receive financial aid for medical research aimed at people
                    and communities, finance medical research for the treatment
                    of rare diseases of global interest
                  </p>
                </div>

                <div className="flex gap-4 items-end mt-5">
                  <p className="text-white text-lg">
                    Associazioni registrate :
                  </p>
                  <p
                    className="text-2xl font-medium"
                    style={{ color: "#9553fb" }}
                  >
                    10
                  </p>
                </div>
                <div className="flex gap-4 items-end">
                  <p className="text-white text-lg">
                    Raccolte fondi in corso :
                  </p>
                  <p
                    className="text-2xl font-medium"
                    style={{ color: "#9553fb" }}
                  >
                    15
                  </p>
                </div>
                <div className="flex gap-4 items-end">
                  <p className="text-white text-lg">In attesa di voto :</p>
                  <p
                    className="text-2xl font-medium"
                    style={{ color: "#9553fb" }}
                  >
                    5
                  </p>
                </div>
                <div className="flex gap-4 items-end">
                  <p className="text-white text-lg">
                    Smart contracts created :
                  </p>
                  <p
                    className="text-2xl font-medium"
                    style={{ color: "#9553fb" }}
                  >
                    55
                  </p>
                </div>

                <div
                  className="w-full py-3 text-3xl text-white mt-5 text-center"
                  style={{ background: "#323232", border: "1px solid #39ebad" }}
                >
                  WFC DONATED 1.123.456
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="border p-2">
                <div className="bg-white p-2 text-black relative">
                  <div>
                    <p>ETH SMART CONTRACT: 0xbdbsdjnsd34ndsdjfnf99fnasd44</p>
                    <div className="flex justify-center my-2">
                      <Image src={givedirectly} className="m-auto" alt="" />
                    </div>
                    <p className="text-sm font-medium border-b border-black w-max">
                      More Info
                    </p>
                  </div>
                  <div className="absolute right-1 top-0 h-full flex justify-end items-center">
                    <div>
                      <p className="bg-gray-600 text-white px-5 py-1 text-center">
                        DONATE
                      </p>
                      <p className="bg-gray-600 text-white px-5 py-1 text-center mt-1">
                        VOTE
                      </p>
                      <p className="text-2xl mt-1">29-08-2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border p-2">
                <div className="bg-white p-2 text-black relative">
                  <div>
                    <p>ETH SMART CONTRACT: 0xbdbsdjnsd34ndsdjfnf99fnasd44</p>
                    <div className="flex justify-center my-2">
                      <Image src={unicef} className="m-auto" alt="" />
                    </div>
                    <p className="text-sm font-medium border-b border-black w-max">
                      More Info
                    </p>
                  </div>
                  <div className="absolute right-1 top-0 h-full flex justify-end items-center">
                    <div>
                      <p className="bg-gray-600 text-white px-5 py-1 text-center">
                        DONATE
                      </p>
                      <p className="bg-gray-600 text-white px-5 py-1 text-center mt-1">
                        VOTE
                      </p>
                      <p className="text-2xl mt-1">29-08-2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border p-2">
                <div className="bg-white p-2 text-black relative">
                  <div>
                    <p>ETH SMART CONTRACT: 0xbdbsdjnsd34ndsdjfnf99fnasd44</p>
                    <div className="flex justify-center my-2">
                      <Image src={savechildren} className="m-auto" alt="" />
                    </div>
                    <p className="text-sm font-medium border-b border-black w-max">
                      More Info
                    </p>
                  </div>
                  <div className="absolute right-1 top-0 h-full flex justify-end items-center">
                    <div>
                      <p className="bg-gray-600 text-white px-5 py-1 text-center">
                        DONATE
                      </p>
                      <p className="bg-gray-600 text-white px-5 py-1 text-center mt-1">
                        VOTE
                      </p>
                      <p className="text-2xl mt-1">29-08-2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border p-2">
                <div className="bg-white p-2 text-black relative">
                  <div>
                    <p>ETH SMART CONTRACT: 0xbdbsdjnsd34ndsdjfnf99fnasd44</p>
                    <div className="flex justify-center my-2">
                      <Image src={donor} className="m-auto" alt="" />
                    </div>
                    <p className="text-sm font-medium border-b border-black w-max">
                      More Info
                    </p>
                  </div>
                  <div className="absolute right-1 top-0 h-full flex justify-end items-center">
                    <div>
                      <p className="bg-gray-600 text-white px-5 py-1 text-center">
                        DONATE
                      </p>
                      <p className="bg-gray-600 text-white px-5 py-1 text-center mt-1">
                        VOTE
                      </p>
                      <p className="text-2xl mt-1">29-08-2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
