import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import QuizIcon from '@mui/icons-material/Quiz';
import TranslateIcon from '@mui/icons-material/Translate';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [t,i18n] = useTranslation("global");
  const [curr_language,setLanguage] = useState("es");

  const handleChangeLanguage = () => {
    if(curr_language === "es"){
      i18n.changeLanguage("kor");
      setLanguage("kor");
    }else{
      i18n.changeLanguage("es");
      setLanguage("es");
    }
  }
  const menuOptions = [
    {
      text: t("navbar.home"),
      route:"/",
      icon: <HomeIcon />,
    },
    {
      text: t("navbar.about-us"),
      route:"/nosotros",
      icon: <PeopleAltIcon />,
    },
    {
      text: t("navbar.faq"),
      route:"/preguntas",
      icon: <QuizIcon />,
    },
    {
      text: t("navbar.contact-us"),
      route:"/contacto",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: t("navbar.translate"),
      route:"",
      icon: <TranslateIcon />,
    },
  ];
  return (
    <nav   data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <Link to="/">
          <div className="nav-logo-container" style={{marginLeft:"20px"}}>
            <img src="images/yihasu_logo.jpg" alt="" style={{width:"60%",height:"60%",objectFit:"contain",mixBlendMode:"multiply"}}/>
          </div>
      </Link>
      <div className="navbar-container" style={{display:"flex",justifyContent:"center",width:"100%",marginTop:"20px",alignItems:"center",backgroundColor:"#fff"}}>
        <div className="navbar-links-container">
          <Link to="/" className="navbar-link">{t("navbar.home")}</Link>
          <Link to="/nosotros" className="navbar-link">{t("navbar.about-us")}</Link>
          <Link to="/contacto" className="navbar-link">{t("navbar.contact-us")}</Link>
          <Link to="/preguntas" className="navbar-link">{t("navbar.faq")}</Link>
          <button className="navbar-link" style={{ borderRadius: "10px", padding: "4px", color: "#4c4c4c", border: "1.5px solid #4c4c4c", cursor:"pointer" }} onClick={() => handleChangeLanguage()}>
            <TranslateIcon />
          </button>
        </div>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250}}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {item.route !== "" ? (
                    <Link to={item.route} style={{textDecoration:"none",color:"#4c4c4c"}}>
                      <ListItemText primary={item.text}/>
                    </Link>
                  ) : (
                    <ListItemText onClick={() => handleChangeLanguage()} primary={item.text} />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
