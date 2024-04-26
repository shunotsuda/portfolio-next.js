import NavList from "../NavList/NavList";
import Logo from "../Logo/Logo";


const SideMenu = () => {
    return (
        <div className="w-56  pt-8 bg-gray-800 text-white hidden md:block">
            <div className="sticky top-0">
                <Logo />
                <NavList />
            </div>
        </div>
    );
};

export default SideMenu;
