import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { EditProvider } from './context/editProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditProvider>
      <App />
    </EditProvider>
  </React.StrictMode>,
)
