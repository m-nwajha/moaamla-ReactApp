import { FooterH5 } from '../Typography';
import { CONTACT_INFO } from '../../constants/CONTACT_INFO';
import './style.css'
const ContactInfo = () => {
  return (
    <>
      <FooterH5>{CONTACT_INFO.title}</FooterH5>
      <ul>
        {CONTACT_INFO.item.map((contactItem)=>{
            return (
              <li key={contactItem.ID}>
                <a href={contactItem.LINK}>
                  <i className={`bi ${contactItem.ICON} fs-5`}></i>
                  {contactItem.LABEL}
                </a>
              </li>
            );
        })}
      </ul>
    </>
  );
}

export default ContactInfo