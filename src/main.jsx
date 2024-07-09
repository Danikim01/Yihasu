import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import global_es from "./translate/es/global.json";
import global_kor from "./translate/kor/global.json";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng:"es",
  resources:{
    es:{
      global:global_es
    },
    kor:{
      global:global_kor
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
