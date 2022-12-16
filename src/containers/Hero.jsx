import React from 'react'
import homeResponsive from '../assets/home-responsive.png'

const Hero = () => {
  return (
    <div className='hero'>
      <h1>Somos Nous</h1>
      <div className='flex-fluid'>
        <div className='hero-text w-40'>
          <h2 className='primary'>Diseño web a tu medida</h2>
          <p className='primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum modi soluta sequi. Perferendis iure laboriosam nostrum, labore sit fuga in nesciunt ullam, saepe, optio obcaecati a beatae rem alias.</p>
          <div className='hero-button'>
            <a href='' className='btn-primary'>Servicios</a>
            <a href='' className='btn-secondary'>Comenzar</a>
          </div>
        </div>
        <div className='hero-image w-40'>
          <img src={homeResponsive} alt='Home responsive image' />
        </div>
      </div>
    </div>
  )
}

export default Hero
