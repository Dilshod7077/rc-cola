import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {MouseFollower} from 'react-mouse-follower'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MouseFollower />
    <App />
  </React.StrictMode>,
)
