
import WhatsApp from "@mui/icons-material/WhatsApp";
import React, { useEffect, useState } from 'react';

function ShakeIcon() {
  const [shakeDirection,setDirection] = useState("shake-horizontal");

  useEffect(() => {
    const icon = document.getElementById('wpp-icon-container');
    const interval = setInterval(() => {
      icon.classList.add(shakeDirection);
      setTimeout(() => {
        icon.classList.remove('shake-horizontal', 'shake-vertical');
      }, 1000); // Duración de la animación de shake
      if(shakeDirection === "shake-horizontal"){
        setDirection("shake-vertical");
      }else{
        setDirection("shake-horizontal");
      }
    }, 2000); // Intervalo de tiempo para repetir la animación

    return () => clearInterval(interval);
  }, [shakeDirection]);

  return (
    <a href="https://wa.me/1161350021" target="_blank" className="float" id="wpp-icon-container">
      <WhatsApp id="fa-wpp" style={{ fontSize: "70px" }} />
    </a>
  );
}

export default ShakeIcon;

