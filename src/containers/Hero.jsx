import React from 'react'
import { MdWebAsset } from 'react-icons/md'

const Hero = () => {
  return (
    <div className='container hero flex-fluid'>
      <div className='hero-text w-50'>
        <h2 className='primary'>Diseño web a tu medida</h2>
        <p className='primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum modi soluta sequi. Perferendis iure laboriosam nostrum, labore sit fuga in nesciunt ullam, saepe, optio obcaecati a beatae rem alias.</p>
        <div className='hero-button'>
          <a href='' className='btn-primary'>Servicios</a>
          <a href='' className='btn-secondary'>Comenzar</a>
        </div>
      </div>
      <div className='hero-image w-50'>
        <MdWebAsset />
      </div>
    </div>
  )
}

export default Hero
