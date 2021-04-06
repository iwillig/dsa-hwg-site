import Link from "next/link";
import React from "react";

const DonateLink = () => {
  return (
  <div className = "flex bg-primary h-80">
  <div className ="ml-4 mt-3 tablet:ml-6 tablet: mt-8 text-header font-bold text-white">
  <Link href="/donate">
    <a>Donate</a>
  </Link></div>
  </div>
  );
}
export default DonateLink;