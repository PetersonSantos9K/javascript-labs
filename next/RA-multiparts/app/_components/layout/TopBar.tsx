"use client";

import { CircleUser, Menu, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import SearchModal from "../ul/SearchModal";

const listOfItems = [
  {
    name: "Início",
    active: true,
  },
  {
    name: "Produtos",
    active: false,
  },
  {
    name: "Categorias",
    active: false,
  },
  {
    name: "Promoções",
    active: false,
  },
  {
    name: "Sobre",
    active: false,
  },
  {
    name: "Contato",
    active: false,
  },
];

export default function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen((prev) => !prev);
  };

  console.log(searchOpen);

  return (
    <header className="bg-background dark:bg-background border-b border-border-subtle dark:border-border-subtle docked full-width top-0 sticky z-50 flat no shadows">
      <nav className="flex justify-between items-center h-16 w-full max-w-container-max mx-auto px-gutter">

        <Menu></Menu>


        <div className="font-headline-md text-headline-md font-bold tracking-tighter text-primary dark:text-primary uppercase">
          RA-MULTIPEÇAS
        </div>

        <ul className="hidden md:flex items-center space-x-lg">
          {listOfItems.map((item) => (
            <li key={item.name}>
              <button
                className={`cursor-pointer
                                    ${item.active ? "text-primary dark:text-primary font-bold border-b-2 border-primary font-body-md hover:text-primary-hover transition-colors duration-200 active:scale-95" : "text-on-surface-variant dark:text-on-surface-variant font-medium font-body-md text-body-md hover:text-primary-hover transition-colors duration-200 active:scale-95"}    
                                `}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-md">
          <div className="hidden lg:block">
            <div className="flex mr-md bg-surface-container border border-border-subtle justify-center items-center ">
              <label htmlFor="search">
                <Search className=" text-on-surface-variant pl-1 cursor-pointer" />
              </label>

              <input
                id="search"
                type="text"
                placeholder="Buscar peças..."
                className="rounded-none pl-2 py-1.5 pr-md text-technical-sm text-on-surface focus:outline-none w-64"
              />
            </div>
          </div>

          <div className="block md:hidden ">
            <div className="flex    text-on-surface-variant justify-center items-center ">
              <label htmlFor="search" onClick={handleSearchClick}>
                <Search className="  cursor-pointer" />
              </label>


              {searchOpen && (
                <SearchModal onClose={() => setSearchOpen(false)} />
              )}
            </div>
          </div>

          <button className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 cursor-pointer">
            <ShoppingCart />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 cursor-pointer">
            <CircleUser />
          </button>
        </div>
      </nav>
    </header>
  );
}
