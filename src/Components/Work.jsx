const Work = () => {
  const workInfoData = [
    {
      image: "images/icons8-delivery-50.png",
      background:"#00A9FF",
      title: "COMODIDAD",
      text: "Servicio al cliente excepcional, asegurándonos de satisfacer las necesidades específicas de cada cliente y sin costo de envío.",
    },
    {
      image: "images/icons8-recycle-64.png",
      background:"#001B79",
      title: "RETORNABILIDAD",
      text: "Yihasu se compromete con prácticas sostenibles, contribuyendo a un impacto ambiental positivo.",
    },
    {
      image: "images/icons8-water-cooler-50.png",
      background:"#00A9FF",
      title: "CALIDAD",
      text: "Bidones de primera calidad para garantizar agua pura y segura.",
    },
  ];
  return (
    <div className="work-section-wrapper" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <div className="work-section-top">
        <h1 className="primary-heading" style={{textAlign:"center",fontSize:"35px"}}>¿Por qué elegir YIHASU?</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" style={{backgroundColor:data.background,color:"#fff",fontSize:"20px"}} key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" style={{width:"100%",height:"100%",color:"#fff"}} />
            </div>
            <div>
              <h2 className="responsive-title">{data.title}</h2>
            </div>
            <div>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
