import React from 'react'
import BoxContent from '../components/BoxContent'

const HomeBoxes = () => {
  return (
    <div className='container home-boxes'>
      <h2>Ofrecemos</h2>
      <div className='flex-fluid'>
        <BoxContent />
        <BoxContent />
        <BoxContent />
      </div>
    </div>
  )
}

export default HomeBoxes
