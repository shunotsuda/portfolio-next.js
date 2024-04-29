import NavList from "../NavList/NavList";
import Logo from "../Logo/Logo";

const SideMenu = () => {
    return (
        <div>
            <div className="w-56 fixed top-0 bottom-0 bg-gray-800 hidden md:block"></div>
            <div className="sticky top-0 mt-8 w-56 text-white hidden md:block">
                <Logo />
                <NavList />
            </div>
        </div>
    );
};

export default SideMenu;
