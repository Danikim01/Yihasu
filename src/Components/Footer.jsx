import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <div className="footer-wrapper" style={{marginBottom:"7rem"}}>
      <div className="footer-section-one" style={{marginLeft:"50px"}}>
        <div className="footer-logo-container">
          <img src="images/yihasu_logo.jpg" style={{width:"100%",height:"100%",objectFit:"contain",mixBlendMode:"multiply"}} alt="" />
        </div>
      </div>
      <div className="footer-section-columns" style={{marginRight:"50px"}}>
        <p>0800 666 7684</p>
        <p>0220 480 1332</p>
        <p>0220 480 3122</p>
      </div>
    </div>
  );
};

export default Footer;
