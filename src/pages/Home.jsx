import Hero from '../containers/Hero'
import HomeBoxes from '../containers/HomeBoxes'
import HomeInfo from '../containers/HomeInfo'
import HomeProcess from '../containers/HomeProcess'
import Slider from '../containers/Slider'
import Testimonials from '../containers/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeBoxes />
      <HomeInfo />
      <Slider />
      <HomeProcess />
      <Testimonials />
    </>
  )
}

export default Home
