import {SocialIcon} from "react-social-icons";
import React from "react";
import Image from 'next/image'
import Link from 'next/link'

const SocialMedia = () => {
  return (
    <ul className='inline-flex  space-x-4'>
       <Link href="https://www.facebook.com/nycdsahealthcarewg">
      <div  className="">
        <Image
          src="/facebook_navbar_icon.svg"
          alt="DSA Logo"
          width={32}
          height={32}
          objectFit="contain"
          ></Image>
      </div>
      </Link>

      <Link href="https://www.instagram.com/nycdsahealth">
      <div  className="">
      <Image
          src="/insta_navbar_icon.svg"
          alt="DSA Logo"
          width={32}
          height={32}
          objectFit="contain"
          ></Image>
      </div>
      </Link>

      <Link href="https://twitter.com/nycdsa_health">
      <div  className=" ">
      <Image
      src="/twitter_navbar_icon.svg"
      alt="DSA Logo"
      width={32}
      height={32}
      objectFit="contain"
      ></Image>
     

      </div>
      </Link>
       </ul>
  );
}
export default SocialMedia;