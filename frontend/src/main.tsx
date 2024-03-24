import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "@/AppRoutes.tsx";
import Layout from "@/layouts/layout.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
          <AppRoutes />
          <Layout children="HOME PAGE"/>
      </Router>
  </React.StrictMode>,

)
