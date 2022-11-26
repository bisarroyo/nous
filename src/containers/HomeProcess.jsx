import BoxProcess from '../components/BoxProcess'

const HomeProcess = () => {
  return (
    <div className='container home-process'>
      <h2>Nuestro proceso</h2>
      <div className='flex-fluid'>
        <BoxProcess
          number='1'
          text='Reunión inicial para conocer la empresa establecer los métodos de trabajo.'
        />
        <BoxProcess
          number='2'
          text='Trabajar en el diseño del sitio web y presentación al cliente para aprobación.'
        />
        <BoxProcess
          number='3'
          text='Contrucción del sitio web de acuerdo al diseño aprobado por el cliente.'
        />
        <BoxProcess
          number='4'
          text='Presentación al cliente y ajustes en el sitio web para finalizar producción'
        />
        <BoxProcess
          number='5'
          text='Lanzamiento del sitio web con el dominio y el hosting necesario para funcionar.'
        />
      </div>
      <div className='btn'>
        <a href='#' className='btn-secondary'>Contáctanos</a>
      </div>
    </div>
  )
}

export default HomeProcess
