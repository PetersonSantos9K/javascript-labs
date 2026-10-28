import Image from "next/image";
import Logo from "../../public/icon.svg"
import LogoName from "./LogoName";
import { useState } from "react";


export default function LogoFull() {



  return (
    <div className="flex items-center gap-4 cursor-pointer " id="logofull">
      <Image src={Logo} alt={"librarium-logo"} className="h-8 w-auto" priority/>

      <div className="leading-none hidden md:block">
       <LogoName className="text-lg"/>
      </div>
    </div>
  );
}
