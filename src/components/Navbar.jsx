import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 p-4 flex items-center justify-between bg-[#5C3D2E] text-[#FEFED2]">
      {/* Logo */}
      <div className="flex items-center pl-4 font-bold text-lg">
        SourDough.
      </div>

      {/* Menu desktop */}
      <nav className="hidden sm:flex gap-6 font-josefin">
        <a href="" className="text-[#FEFED2] hover:text-white">about</a>
        <a href="" className="text-[#FEFED2] hover:text-white">menu</a>
        <a href="" className="text-[#FEFED2] hover:text-white">order!</a>
      </nav>

      {/* Menu mobile (dropdown) */}
      <div className="sm:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-[#FEFED2] hover:bg-white/20">
            ☰
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#38211E] shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-[#FEFED2] hover:bg-white/5 hover:text-white font-josefin"
                >
                  about
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-[#FEFED2] hover:bg-white/5 hover:text-white font-josefin"
                >
                  menu
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-[#FEFED2] hover:bg-white/5 hover:text-white font-josefin"
                >
                  order!
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
}
