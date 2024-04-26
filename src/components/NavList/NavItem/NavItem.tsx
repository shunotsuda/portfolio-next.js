"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type NavListItemProps = {
    label: string;
    link: string;
    icon: React.ReactNode;
};

const NavItem: FC<NavListItemProps> = ({ label, link, icon }) => {
    const pathName = usePathname();
    return (
        <Link
            href={link}
            className={`flex p-4 items-center w-full hover:bg-gray-700 font-medium ${
                pathName === link
                    ? "bg-gray-600 border-r-4 border-r-green-500"
                    : ""
            }`}
        >
            <div className="pr-4">{icon}</div>
            <div>{label}</div>
        </Link>
    );
};
export default NavItem;
