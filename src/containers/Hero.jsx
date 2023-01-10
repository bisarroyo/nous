import { useInView } from 'framer-motion'
import { useRef } from 'react'
import homeResponsive from '../assets/home-responsive.png'

const Hero = () => {
  const refTitle = useRef(null)
  const refText = useRef(null)
  const refImage = useRef(null)
  const refBtn = useRef(null)
  const isInViewTitle = useInView(refTitle, { once: true })
  const isInViewText = useInView(refText, { once: true })
  const isInViewImage = useInView(refImage, { once: true })
  const isInViewBtn = useInView(refBtn, { once: true })

  return (
    <div className='hero'>
      <h1
        ref={refTitle}
        style={{
          transform: isInViewTitle ? 'none' : 'translateY(-25px)',
          opacity: isInViewTitle ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
        }}
      >
        Somos Nous
      </h1>
      <div className='flex-fluid'>
        <div
          className='hero-text w-40'
          ref={refText}
          style={{
            transform: isInViewText ? 'none' : 'translateY(50px)',
            opacity: isInViewText ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
          }}
        >
          <h2 className='primary'>Diseño web a tu medida</h2>
          <p className='primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum modi soluta sequi. Perferendis iure laboriosam nostrum, labore sit fuga in nesciunt ullam, saepe, optio obcaecati a beatae rem alias.</p>
          <div className='hero-button'>
            <a href='' className='btn-primary'>Servicios</a>
            <a
              href=''
              className='btn-secondary'
              ref={refBtn}
              style={{
                // width: isInViewBtn ? '100px' : '0',
                // transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
              }}
            >Comenzar
            </a>
          </div>
        </div>
        <div
          className='hero-image w-40'
          ref={refImage}
          style={{
            transform: isInViewImage ? 'none' : 'translateY(50px)',
            opacity: isInViewImage ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
          }}
        >
          <img src={homeResponsive} alt='Home responsive image' />
        </div>
      </div>
    </div>
  )
}

export default Hero
