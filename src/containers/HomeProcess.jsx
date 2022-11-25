import BoxProcess from '../components/BoxProcess'

const HomeProcess = () => {
  return (
    <div className='container home-process'>
      <h2>Nuestro proceso</h2>
      <div className='flex-fluid'>
        <BoxProcess />
        <BoxProcess />
        <BoxProcess />
      </div>
      <div className='btn'>
        <a href='#' className='btn-secondary'>Contáctanos</a>
      </div>
    </div>
  )
}

export default HomeProcess
