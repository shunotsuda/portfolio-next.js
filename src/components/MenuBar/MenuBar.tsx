
import { MouseEventHandler } from 'react';

// onClickプロパティの型を明示的に指定
interface MenuBarProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const MenuBar = ({onClick}:MenuBarProps) => {
  return (
    <div className="w-8 h-6 mr-4" onClick={onClick}>
      <div className="w-8 h-0.5 mb-[9px] bg-white"></div>
      <div className="w-8 h-0.5 bg-white "></div>
      <div className="w-8 h-0.5 mt-[9px] bg-white"></div>
    </div>
  )
}

export default MenuBar
