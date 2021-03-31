import {NavLinks} from "../data/displayData";
import Link from "next/link";
import React from "react";

const FooterNavMenu = () => {
  return (
    <>
      <ul>
        {NavLinks.map((x) => {
          return (<li key={x.href}>
            <Link href={x.href}><a>{x.displayName}</a></Link>
          </li>)
        })}
      </ul>
    </>
  )
}
export default FooterNavMenu;