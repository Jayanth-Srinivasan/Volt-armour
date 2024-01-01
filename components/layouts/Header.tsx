import Link from "next/link";
import React from "react";

import Image from "next/image";

function Header() {
  return (
    <nav className="bg-transparent fixed top-0 z-50 w-full">
      <div className="mx-auto z-50 flex w-full p-3 md:px-5 md:py-3 lg:px-[5vw] lg:py-5  max-w-[1440px] items-center justify-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/assets/Logo.png"}
            width={1080}
            height={1920}
            alt="logo"
            className="h-auto w-24 max-w-full"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
