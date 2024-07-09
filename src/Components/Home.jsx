import { FiArrowRight } from "react-icons/fi";
import Work from "./Work";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t,i18n] = useTranslation("global");

  return (
    <div className="home-container" style={{padding:"30px",backgroundColor:"#EEF5FF"}}>
      <div className="home-banner-container"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2000">
        <div className="home-text-section">
          <h1 className="primary-heading">
            {t("home.primary-heading")}
          </h1>
          <p className="primary-text">
            Agua pura, tu eleccion segura
          </p>
          <Link to="/contacto" style={{textDecoration:"none"}}>
          <button className="secondary-button">
              Contactanos ! <FiArrowRight />{" "}
          </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src="images/dispenser_yihasu.png" alt="" style={{height:"100%",width:"100%",mixBlendMode:"multiply",borderRadius:"10%",border:"2px solid ##66ccff"}}/>
        </div>
      </div>
        
        <div className="our-services" data-aos="fade-up"
     data-aos-duration="3000" style={{marginTop:"6rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <h3 className="primary-heading" style={{fontSize:"35px",textAlign:"center"}}>
              Como funciona nuestro servicio
          </h3>
          <div className="service-point-container" style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-around", marginTop: "3.5rem"}}>
            <div className="section-1">
              <div className="service-point">
                <img src="checkmark.jpg" alt=""/>
                <p className="custom-list-item">Agua pura y segura</p>
              </div>
              <div className="service-point">
                <img src="checkmark.jpg" alt="" />
                <p className="custom-list-item">Agua pura y segura</p>
              </div>
            </div>
            <div className="section-1">
              <div className="service-point">
                  <img src="checkmark.jpg" alt="" />
                  <p className="custom-list-item">Agua pura y segura</p>
                </div>
              <div className="service-point">
                <img src="checkmark.jpg" alt="" />
                <p className="custom-list-item">Agua pura y segura</p>
              </div>
            </div>
          </div>



        </div>
        <Work />
    </div>
  );
};

export default Home;