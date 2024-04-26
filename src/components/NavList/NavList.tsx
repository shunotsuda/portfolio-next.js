import { FaFolderMinus, FaHistory, FaHome } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";
import { TiMessages } from "react-icons/ti";
import { TbZoomQuestion } from "react-icons/tb";

type NavListItemType = {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
};

const NavList = () => {
    const navList: NavListItemType[] = [
        {
            id: 1,
            label: "Home",
            link: "/",
            icon: <FaHome className="size-5" />,
        },
        {
            id: 2,
            label: "works",
            link: "/works",
            icon: <FaFolderMinus className="size-5" />,
        },
        {
            id: 3,
            label: "history",
            link: "/history",
            icon: <FaHistory className="size-5" />,
        },
        {
            id: 4,
            label: "message",
            link: "/message",
            icon: <TiMessages className="size-5" />,
        },
        // {
        //     id: 5,
        //     label: "Blog",
        //     link: "/blog",
        //     icon: <TbZoomQuestion className="size-5" />,
        // },

    ];

    return (
        <div className="mt-24">
            {navList.map((item:NavListItemType) => (
                <NavItem
                    key={item.id}
                    label={item.label}
                    link={item.link}
                    icon={item.icon}
                />
            ))}
        </div>
    );
};

export default NavList;
