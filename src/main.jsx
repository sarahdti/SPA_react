import './main.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from 'react-bootstrap';



createRoot(document.getElementById('root')).render(
    <ThemeProvider dir="rtl">
    <App />
  </ThemeProvider>
  
)
