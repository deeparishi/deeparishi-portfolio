import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import emailjs from '@emailjs/browser'

// TODO: Replace 'YOUR_PUBLIC_KEY_HERE' with your actual EmailJS public key
emailjs.init('tUjNxVa35ascMJOOU');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)