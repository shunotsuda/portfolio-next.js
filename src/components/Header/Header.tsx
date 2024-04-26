"use client";

import { useState } from "react";
import Logo from "../Logo/Logo";
import MenuBar from "../MenuBar/MenuBar";
import NavList from "../NavList/NavList";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="w-full h-20 fixed z-[9999] flex justify-between items-center  bg-gray-800 text-white md:hidden">
                <Logo />
                <MenuBar onClick={toggleMenu} />
            </div>
            <div className="w-full h-20 md:hidden"></div>
            {isOpen && (
                <div className=" z-[9998] fixed top-0 right-0 left-0 bottom-0 bg-gray-800 text-white md:hidden" onClick={toggleMenu}>
                    <NavList />
                </div>
            )}
        </>
    );
};

export default Header;
