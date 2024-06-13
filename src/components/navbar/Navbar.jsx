"use client"

import Image from "next/image";
import Links from "./links/Links";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      const offset = window.scrollY;
      if(offset>0){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll);
  },[]);
  return ( 
    <div className={`text-3xl fixed top-0 w-full flex items-center justify-between p-4 border-b-4 border-b-black transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-white'} ${isScrolled ? 'text-white' : 'text-black'}`}>
      <div className="flex items-center">
        <Image src="/istelogo.svg" alt="istelogo" width={45} height={45} className="pr-1"/>
        <div className="text-4xl">ISTE</div>
      </div>
      <div>
        <Links/>
      </div>
    </div>
   );
}
 
export default Navbar;