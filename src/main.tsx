import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthProviderWrapper from '@/features/auth/AuthProviderWrapper';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper> 
        <App />
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
