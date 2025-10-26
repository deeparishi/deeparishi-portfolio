/// <reference path="./types/gtag.d.ts" />
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import emailjs from '@emailjs/browser'
import { Integration } from './data/portfolioData.ts'

emailjs.init(Integration.PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)