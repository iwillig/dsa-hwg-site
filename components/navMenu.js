import {NavLinks, renderInformation} from "../data/displayData";
import Link from "next/link";
import React from "react";
import SocialMedia from "../components/socialMedia";
import Image from 'next/image'

const NavMenu = () => {
  return (
    <nav>
      <div className = " flex items-center mx-8  desktop:mx-64  my-4 desktop:my-8 ">
        <ul className = " mr-auto ml-0  hidden tablet:flex space-x-6 desktop:space-x-8">
          {NavLinks.map((x, index) =>
              <li key={index} className = "text-primary hover:text-highlight font-bold text-navbar">
                <Link href={x.href} >
                  {x.displayName}</Link>
              </li>
          )}
        </ul>


        <div className = " ml-auto mr-0 tablet:hidden  ">
      <Image
          src="/menu_icon.svg"
          alt="DSA Logo"
          width={48}
          height={48}
          ></Image>
        </div>

        <div className ="inline-flex items-center ml-auto mr-0 hidden tablet:flex space-x-4 desktop:space-x-6">
        <div>
          <SocialMedia />
        </div>

        <div>  
          <Link href={renderInformation.donateLink.href}>
          <button className="bg-primary hover:bg-highlight text-white font-bold py-2 px-4 rounded-full ">
            Donate</button>
          </Link>
        </div>
        </div>
      </div>


    </nav>
  )
};

export default NavMenu;