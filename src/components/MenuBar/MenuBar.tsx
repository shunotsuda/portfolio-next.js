import { MouseEventHandler } from "react";

// onClickプロパティの型を明示的に指定
interface MenuBarProps {
    isOpen: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const MenuBar = ({ onClick , isOpen }: MenuBarProps) => {
    return (
        <div className="w-8 h-6 mr-4 relative" onClick={onClick}>
            <div className="w-8 h-0.5 mb-[9px] bg-white transform transition-all duration-1000" style={{ transform: isOpen ? 'translateY(11px) rotate(-225deg) scaleX(0.75)' : 'none' }}></div>
            <div className="w-8 h-0.5 bg-white transition-all duration-500" style={{ opacity: isOpen ? 0 : 1 }}></div>
            <div className="w-8 h-0.5 mt-[9px] bg-white transform  transition-all duration-1000" style={{ transform: isOpen ? 'translateY(-11px) rotate(225deg) scaleX(0.75)' : 'none' }}></div>
        </div>
    );
};

export default MenuBar;
