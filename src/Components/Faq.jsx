import React from 'react';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];
const Faq = () => {
    return (
        <div className="faq-page-wrapper" style={{marginTop:"3rem",backgroundColor:"#EEF5FF",padding:"20px",height:"90vh"}}>
            <h1 className="primary-heading" style={{marginBottom:"3rem",textAlign:"center"}}>Preguntas Frecuentes</h1>
            <div className="faq-accordion">
                <Collapse accordion items={items} size='large'/>
            </div>
        </div>
    );
}

export default Faq;