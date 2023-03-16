import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'typeface-inter';

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
