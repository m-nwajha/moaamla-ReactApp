import { FooterH4 } from '../Typography';
import { SOCIAL_LINKS } from '../../constants/SOCIAl_LINKS';
import './style.css';
const SocialLinks = () => {
  return (
    <>
      <FooterH4>{SOCIAL_LINKS.title}</FooterH4>
      <div className='social-links d-flex justify-content-center'>
        {SOCIAL_LINKS.item.map(soItem => {
          return (
            <a
              key={soItem.ID}
              href={soItem.LINK}
              className={soItem.LABEL}
              title={soItem.LABEL}>
              <i className={`bi ${soItem.ICON}`}></i>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SocialLinks;
