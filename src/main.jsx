import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode ensures component is run twice(only in development mode) and 
  // helps identify potential problems during development like deprecated API usuage, unsafe life cycles etc.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
