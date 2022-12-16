// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

const Testimonials = () => {
  return (
    <div className='testimonials-container container'>
      <h2>Testimonios de nuestros Clientes</h2>
      <Swiper loop modules={[Navigation]}>
        <SwiperSlide>
          <div className='textimonial-text'>
            <p>Son muy profesionales en el servicio, el trato y velocidad de entrega fue muy rápido.</p>
            <br />
            <p><i>- Bismark</i></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials
