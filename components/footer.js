import CopyRight from "./copyRight";
import React from "react";
import FooterNavMenu from "./footerNavMenu";
import Image from 'next/image'


const Footer = () => {
  return (
    <>
    <div className = "h-96">
    <div className = "mt-12  grid grid-col-2 grid-row-2 tablet:grid-cols-4 tablet:grid-row-1 tablet:gap-6 mt-2">
      <div  className="flex mt-0 mb-auto col-span-2 mx-8 h-18 w-75 relative ">
          <Image
            src="/logo_footer.png"
            alt="DSA Logo"
            width={297}
            height={72}
            className = "object-contain"
            ></Image>
        </div>
      <FooterNavMenu/>
      <CopyRight/>
      </div>
      </div>
    </>
  );
}
export default Footer;