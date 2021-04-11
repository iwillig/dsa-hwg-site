import React from "react";
import Image from 'next/image'

const SplashScreen = (props) => {
  return (
    <>
    <div className= " mt-16 mb-24 laptop:mt-32 laptop:mb-40 desktop:mt-36 desktop:mb-48 "> 
        <div  className="mx-8  desktop:mx-64 h-96 w-480 relative hidden tablet:flex">
          <Image
            src="/logo_1440.png"
            alt="DSA Logo"
            width={1832}
            height={288}
            className = "object-contain"
            ></Image>
        </div>

        <div  className="mx-4 h-111 w-184 relative flex tablet:hidden">
          <Image
            src="/logo_375.png"
            alt="DSA Logo"
            width={343}
            height={236}
            className = "object-fill"
            ></Image>
        </div>
    </div>
    </>
  );
}

export default SplashScreen;