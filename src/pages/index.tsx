import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { useWallet } from "hooks";
import { PageContainer, Button } from "components";
import Link from "next/link";

export default function Home() {
  const [web3, setWeb3] = useState<Web3>();
  const [isConnected, setIsConnected] = useState(false);

  const { wallet, setWallet } = useWallet();

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "29daa43373c9428ba72def7e3328085f",
      },
    },
  };

  useEffect(() => {
    if (web3) {
    }
  }, [web3]);

  useEffect(() => {
    console.log("page index wallet", wallet);
  }, [wallet]);

  return (
    <PageContainer>
      {!wallet ? (
        <>
          <h1 className="text-white text-center text-5xl mt-20 font-bold">
            Decentralized Donations Platform
          </h1>
          <p
            className="p-2 rounded border-[#9553fb] text-white max-w-max m-auto text-lg mt-10 border "
            style={{ border: "2px solid #9653fb" }}
          >
            A NEW WAY TO DONATE{" "}
            <span style={{ color: "#9553fb" }}>SIMPLE-SAFE-DECENTRALIZED</span>
          </p>

          <Button
            className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
            primary
            onClick={async () => {
              const web3Modal = new Web3Modal({
                network: "rinkeby", // optional
                cacheProvider: true, // optional
                providerOptions, // required
              });
              const provider = await web3Modal.connect();
              const web3 = new Web3(provider);
              setWeb3(web3);
              const accounts = await web3.eth.getAccounts();
              if (accounts) {
                setWallet(accounts[0]);
              }
            }}
          >
            CONNECT TO WFC PLATFORM
          </Button>
        </>
      ) : (
        <>
          <h1 className="text-white text-center text-5xl mt-20">LOG IN HOW</h1>

          <div className="text-center mt-10">
            <Link href="/home">
              <Button className="" primary onClick={async () => {}}>
                DONOR
              </Button>
            </Link>
            <p className="text-white text-center mt-10 text-3xl">OR</p>
            <Link href="/home">
              <Button className="mt-10" primary onClick={async () => {}}>
                ASSOCIATION
              </Button>
            </Link>
          </div>
        </>
      )}
      <div className="container absolute left-0 right-0 bottom-10 text-center m-auto">
        <div className=" p-5 border-2 border-red-600 rounded-lg text-white inline-flex items-end justify-between text-left">
          <div className="mr-10 inline-block">
            <h2 className="text-2xl relative pb-1 inline-block">
              A NEW WAY TO DONATE{" "}
              <span className="text-base text-green-300">
                SIMPLE-SAFE-DECENTRALIZED
              </span>
              <div className="absolute left-0 right-0 bottom-0 pb-0.5 bg-gradient-to-r from-white to-green-300" />
            </h2>
            <p className="uppercase mt-2">
              You can help make this world better through a donation or <br />
              you can launch your fundraising if you need financial aid
            </p>
          </div>

          <Button
            className="uppercase flex-shrink-0 border-2 border-green-300 text-green-300 px-4 py-2 rounded-3xl"
            onClick={() => {}}
          >
            Join Platform
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
