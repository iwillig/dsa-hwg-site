import Link from "next/link";
import React from "react";
import {renderInformation} from "../data/displayData";

const DonateLink = () => {
  return (
  <div className = "flex bg-primary h-80">
  <div className =" mx-8  desktop:mx-64 mt-3 tablet:mx-6 tablet: mt-8 text-header font-bold text-white">
  <Link href={renderInformation.donateLink.href}>
    <a>Donate</a>
  </Link></div>
  </div>
  );
}
export default DonateLink;