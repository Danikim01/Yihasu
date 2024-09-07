import { Collapse } from 'antd';

const items = [
  {
    key: '0',
    label: <div style={{ fontSize: "22px" }}>¿Qué productos venden?</div>,
    children: <p>Yihasu vende bidones de 20L y 12L.</p>,
  },
  {
    key: '1',
    label: <div style={{ fontSize: "22px" }}>¿Cuánto sale el costo de envío?</div>,
    children: <p>El costo de envio es gratis. No hay cargo.</p>,
  },
  {
    key: '2',
    label: <div style={{ fontSize: "22px" }}>¿Cuáles son los métodos de pago?</div>,
    children: <p>Efectivo, Mercado Pago y transferencias bancarias.</p>,
  },
  {
    key: '3',
    label: <div style={{ fontSize: "22px" }}>¿En qué dia y horario se entregan los productos?</div>,
    children: <p>El día y horario lo podes acordar a través del número 1161350021. A convenir con la empresa.</p>,
  },
  {
    key: '4',
    label: <div style={{ fontSize: "22px" }}>¿Es posible recoordinar el dia y horario de la entrega de productos?</div>,
    children: <p>Sí, llamar al 1161350021.</p>,
  },
  {
    key: '5',
    label: <div style={{ fontSize: "22px" }}>¿Cómo recibo un dispenser frio-calor?</div>,
    children: <p>Realizar el pedido dejando su nombre y teléfono y un vendedor se contactará con usted.</p>,
  },
  {
    key: '6',
    label: <div style={{ fontSize: "22px" }}>¿Cómo recibo un dispenser de agua natural?</div>,
    children: <p>Con la compra de un bidon por mes, se le entrega sin cargo un dispenser de agua natural.</p>,
  },
];

const Faq = () => {
  return (
    <div className="faq-page-wrapper" style={{ marginTop: "3rem", backgroundColor: "#EEF5FF", padding: "20px"}}>
      <h1 className="primary-heading" style={{ marginLeft:"2rem",marginTop:"1rem", marginBottom: "3rem", textAlign: "center" }}>Preguntas Frecuentes</h1>
      <div className="faq-accordion">
        <Collapse accordion items={items} size='large' />
      </div>
    </div>
  );
}

export default Faq;
