import { Link } from 'react-router-dom';
import { FooterH5 } from '../Typography';
import './style.css';

const FooterLinks = ({ title, menu }) => {
  return (
    <div className='footer_links'>
      <FooterH5>{title}</FooterH5>
      <ul>
        {menu.map(linkItem => {
          return (
            <li key={linkItem.id}>
              <Link href={linkItem.href}>{linkItem.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
