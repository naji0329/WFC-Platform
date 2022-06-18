import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useWallet } from "hooks";

import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Sidebar = () => {

  const [randomeColor, setRandomColor] = useState("#857d2f");

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    setRandomColor('#' + n.slice(0, 6))
  }

  return (
    <div className="border-r w-max border-gray-500 pt-5 h-screen">
      <div className="text-white px-4">
        <p className="text-sm mb-4 mt-8">YOUR MONEY</p>
        <ul className="pl-4 font-bold cursor-pointer">
          <li className="mt-2"><Link href="/Dashboard"><p className="flex items-center gap-2"><FontAwesomeIcon icon={"fa-solid fa-chart-simple"} className="h-4" />Dashboard</p></Link></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon={"fa-solid fa-arrows-rotate"} className="h-4" />Swap</p></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" className="h-4" />Transaction History</p></li>
          <li className="mt-2"><p className="flex items-center gap-2" style={{color: randomeColor}} ><FontAwesomeIcon icon="fa-solid fa-icons" className="h-4" />NFT Galary</p></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-lines-leaning" className="h-4" />Earning from votes</p></li>
        </ul>

        <p className="text-sm mb-4 mt-8">DISCOVER SERVICE LINES</p>
        <ul className="pl-4 font-bold cursor-pointer">
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-circle-plus" className="h-4" />S1 - Medical Research</p></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-book-atlas" className="h-4" />S2 - Natural Disasters</p></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-book-journal-whills" className="h-4" />S3 - Innovative Startups</p></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-hand-holding-hand" className="h-4" />Help request</p></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-filter-circle-dollar" className="h-4" />Reserve Fund</p></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-bars-progress" className="h-4" />Last projects</p></li>
        </ul>

        <p className="text-sm mb-4 mt-8">GET HELP / PARTICIPATE</p>
        <ul className="pl-4 font-bold cursor-pointer">
          <li className="mt-2"><Link href="/Faqs"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-book" className="h-4" />FAQs</p></Link></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-link" className="h-4" />Join Discord</p></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-bookmark" className="h-4" />Make a suggestion</p></li>
          <li className="mt-2"><p className="flex items-center gap-2"><FontAwesomeIcon icon="fa-solid fa-outdent" className="h-4" />DAO</p></li>
        </ul>
      </div>
    </div>
  );
};
