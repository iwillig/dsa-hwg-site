import {Events, NavLinks, renderInformation} from "../data/displayData";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <div>
      <ul>
        {NavLinks.map((x) =>
          <li key={x.href}>
            <Link href={x.href}><a>{x.displayName}</a></Link>
          </li>
        )}
      </ul>
    </div>
  )
};

export default NavMenu;