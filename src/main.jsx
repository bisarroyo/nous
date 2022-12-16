import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ChakraProvider } from '@chakra-ui/react'

import './styles/style.scss'
// Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'

import App from './routes/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
)
