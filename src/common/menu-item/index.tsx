import { Link } from 'react-router-dom';
import './style.scss';

interface IMenuItem {
  text: string;
  link: string;
}

export const MenuItem = ({ text, link }: IMenuItem) => {
  return (
    <Link to={link} className="menu-item">
      <span className="text-menu">{text}</span>
    </Link>
  );
};
