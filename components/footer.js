import CopyRight from "./copyRight";
import React from "react";
import FooterNavMenu from "./footerNavMenu";
import Image from 'next/image'


const Footer = () => {
  return (
    <>
    <div className = "h-96  ">
    <div className = "mt-12 mx-8  desktop:mx-64 grid grid-col-2 grid-rows-2 tablet:grid-cols-4  tablet:grid-rows-1 tablet:gap-6 gap-4">
      <div  className="flex  mt-0 mb-auto col-span-2 h-18 w-75 relative pb-20 tablet:pb-0 ">
          <Image
            src="/logo_footer.png"
            alt="DSA Logo"
            width={297}
            height={72}
            className = "object-contain"
            ></Image>
        </div>
        <div className = ""><FooterNavMenu/></div>
        <div className = ""><CopyRight/></div>
      
      </div>
      </div>
    </>
  );
}
export default Footer;