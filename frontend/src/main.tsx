import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "@/AppRoutes.tsx";
import Auth0ProviderWithNavigate from "@/auth/Auth0ProviderWithNavigate.tsx";
import {QueryClient, QueryClientProvider} from "react-query";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
          <QueryClientProvider client={queryClient}>
              <Auth0ProviderWithNavigate>
                  <AppRoutes />
              </Auth0ProviderWithNavigate>
          </QueryClientProvider>

      </Router>
  </React.StrictMode>,

)
