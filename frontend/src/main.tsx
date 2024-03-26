import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "@/AppRoutes.tsx";
import Auth0ProviderWithNavigate from "@/auth/Auth0ProviderWithNavigate.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
          <Auth0ProviderWithNavigate>
              <AppRoutes />
          </Auth0ProviderWithNavigate>

      </Router>
  </React.StrictMode>,

)
