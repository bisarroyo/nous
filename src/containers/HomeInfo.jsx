import React from 'react'
import homeManteinance from '../assets/home-manteinance.png'

const HomeInfo = () => {
  return (
    <div className='home-info flex-fluid'>
      <div className='hero-image w-40'>
        <img src={homeManteinance} alt='Home manteinance logo' />
      </div>
      <div className='hero-text w-40'>
        <h2 className='primary'>Diseño web a tu medida</h2>
        <p className='primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum modi soluta sequi. Perferendis iure laboriosam nostrum, labore sit fuga in nesciunt ullam, saepe, optio obcaecati a beatae rem alias.</p>
        <div className='hero-button'>
          <a href='' className='btn-primary'>Servicios</a>
          <a href='' className='btn-secondary'>Comenzar!</a>
        </div>
      </div>
    </div>
  )
}

export default HomeInfo
