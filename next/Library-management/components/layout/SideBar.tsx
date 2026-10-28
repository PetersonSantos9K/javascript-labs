'use client'
import Button, { element } from "../ul/Button";
import LogoFull from "../ul/LogoFull";

import {useEffect, useState } from "react";
export default function SideBar() {
  const [scrolled, setScrolled] = useState(false);
  
  const auth: element[] = [
    {
        label: "Entrar",
        specificCss: "bg-transparent text-text-sub border border-border-md hover:border-accent hover:text-accent"
    },
    {
        label: "Criar conta",
        specificCss: "bg-accent text-bg shadow-[0_4px_20px_rgba(212,168,83,0.2)] transition-all duration-200 hover:bg-accent-hover "
    }
];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 h-16
             flex items-center bg-bg/80 backdrop-blur-md transition-all duration-300 border-b border-bg
                ${scrolled ? "border-b border-border" : ""}
             `}
        >
            <div className="w-full max-w-275 mx-auto px-10 flex items-center justify-between md:gap-0 gap-3">
                <LogoFull />
                <div className="flex items-center gap-4">
                    <Button 
                        elements={auth} 
                        key={1} 
                        className={`md:py-2 md:px-6 p-2  text-[8px] md:text-xs uppercase tracking-[0.14em] font-medium font-mono cursor-pointer transition-all duration-200`}
                    />
                </div>
            </div>
        </nav>
  );
}