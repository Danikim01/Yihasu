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
            {t("home.primary-text")}
          </p>
          <Link to="/contacto" style={{textDecoration:"none"}}>
          <button className="secondary-button">
            {t("home.contact-us-button")} <FiArrowRight />{" "}
          </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src="images/dispenser_yihasu.png" alt="" style={{height:"100%",width:"100%",mixBlendMode:"multiply",borderRadius:"10%",border:"2px solid ##66ccff"}}/>
        </div>
      </div>
        
        <div className="our-services" data-aos="fade-up"
     data-aos-duration="3000" style={{marginTop:"6rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <h3 className="primary-heading">
              Cómo funciona nuestro servicio
          </h3>
          <div className="service-point-container" style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", gap: "20px", justifyContent: "center", marginTop: "3.5rem"}}>
            <div className="section-1">
              <div className="service-point">
                <img src="checkmark.jpg" alt=""/>
                <div className="service-description">
                  <h4>Calidad certificada:</h4>
                  <br />
                  <p className="custom-list-item">Cumplimos con las Normas del Código Alimentario para Consumo Seguro.</p>
                </div>
              </div>
              <div className="service-point">
                <img src="checkmark.jpg" alt="" />
                <div className="service-description">
                  <h4>Especialistas en todo tipo de tratamiento:</h4>
                  <br />
                  <p className="custom-list-item">Óptimos resultados de laboratorio, garantizando agua confiable y de alta competitividad.</p>
                </div>
              </div>
            </div>
            <div className="section-1">
              <div className="service-point">
                  <img src="checkmark.jpg" alt="" />
                  <div className="service-description">
                    <h4>Líderes en Soluciones de Agua para un Futuro Sustentable</h4>
                    <br />
                    <p className="custom-list-item">Cumplimos con las Normas del Código Alimentario para Consumo Seguro.</p>
                  </div>
                </div>
              <div className="service-point">
                <img src="checkmark.jpg" alt="" />
                <div className="service-description">
                  <h4>Eficiencia garantizada:</h4>
                  <br />
                  <p className="custom-list-item">Seguridad y preservación del agua, brindando una gama completa de soluciones para su tratamiento y cuidado.</p>
                </div>
              </div>
            </div>
          </div>



        </div>
        <Work />
    </div>
  );
};

export default Home;