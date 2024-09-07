import React from "react";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div className="contact-page-wrapper" style={{backgroundColor:"#EEF5FF",padding:"30px"}}>
      <h1 className="primary-heading">Contactános</h1>
      <div className="contact-section-bottom">
        <div className="contact-section-info">
          <span className="info-boxes-img-container"><PlaceIcon style={{width:"50px",height:"50px"}}/></span>
          <h1>Nuestra sede principal</h1>
          <p>Bebedero 531, Buenos Aires Argentina (Merlo, Pcia)</p>
          <div id="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.549476660201!2d-58.74310202445428!3d-34.691318372922915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bceaa635f1b67b%3A0xb96961f4ddd00feb!2sBebedero%20531%2C%20B1721%20Merlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1710106465493!5m2!1ses-419!2sar"
              width="600"
              height="450"
              title="mapa"
              style={{ border: "2px solid blue", width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="contact-section-info">
          <span className="info-boxes-img-container"><PhoneInTalkIcon style={{width:"50px",height:"50px"}}/></span>
          <h1>Teléfonos</h1>
          <p>+54 91161350021</p>
          <p>0800 666 7684</p>
          <p>0220 480 1332</p>
          <p>0220 480 3122</p>
        </div>
        <div className="contact-section-info">
          <span className="info-boxes-img-container"><EmailIcon style={{width:"50px",height:"50px"}}/></span>
          <h1>Email</h1>
          <p>info@yihasu.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
