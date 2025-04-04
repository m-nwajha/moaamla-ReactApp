import { Link } from 'react-router-dom';
import { FooterH4 } from '../Typography';
import './style.css';

const FooterLinks = ({ title, menu }) => {
  return (
    <div className='footer_links'>
      <FooterH4>{title}</FooterH4>
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
