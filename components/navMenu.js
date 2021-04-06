import {Events, NavLinks, renderInformation} from "../data/displayData";
import Link from "next/link";
import React from "react";
import SocialMedia from "../components/socialMedia";
import Image from 'next/image'

const NavMenu = () => {
  return (
    <nav>
      <div className = " flex items-center mx-8  mt-4 mb-4 ">
      <ul className = "flex mr-auto ml-0  hidden tablet:flex space-x-6">
        {NavLinks.map((x) =>
            <div className = "">
          <li key={x.href} className = "text-primary font-bold text-navbar">
            <Link href={x.href} >
              {x.displayName}</Link>
          </li>
            </div>
        )}
      </ul>
        <div className = " flex ml-auto mr-0 hidden tablet:flex">
          <SocialMedia />
        </div>

        <div className = "flex ml-auto mr-0 tablet:hidden ">
      <Image
          src="/menu_icon.svg"
          alt="DSA Logo"
          width={48}
          height={48}
          ></Image>
        </div>

      </div>


    </nav>
  )
};

export default NavMenu;