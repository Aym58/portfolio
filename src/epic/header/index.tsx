import { MenuElement } from 'epic/menu';
import './style.scss';

export const Header = () => {
  return (
    <div className="header-box">
      <div className="name-box">
        <span className="text-logo">ALEX MUNTIAN</span>
      </div>
      <div className="menu-box">
        <MenuElement />
      </div>
    </div>
  );
};
