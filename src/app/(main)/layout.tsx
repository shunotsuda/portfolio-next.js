import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="w-full min-h-screen md:flex">
            <Header />
            <div className="fixed top-0 left-0 right-0 bottom-0 m-auto z-[-1] bg-slate-700 "></div>
            <SideMenu />
            <main className="md:flex-1">{children}</main>
        </div>
    );
};

export default MainLayout;
