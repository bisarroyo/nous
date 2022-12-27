import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Layout from '../containers/Layout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Services from '../pages/Services'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/protfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
