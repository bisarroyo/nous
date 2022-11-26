import React from 'react'
import { MdWebAsset } from 'react-icons/md'

const Hero = () => {
  return (
    <div className='hero'>
      <div class='custom-shape-divider-top-1669423948'>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' class='shape-fill' />
        </svg>
      </div>
      <div className='container flex-fluid'>
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
    </div>
  )
}

export default Hero
