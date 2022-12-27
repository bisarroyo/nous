import { SiMaterialdesignicons } from 'react-icons/si'
import { AiOutlineFileSearch, AiFillTool } from 'react-icons/ai'
import BoxContent from '../components/BoxContent'

const HomeBoxes = () => {
  return (
    <div className='home-boxes'>
      {/* Divider curve */}
      <div className='custom-shape-divider-top-1669514126'>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className='shape-fill' />
        </svg>
      </div>
      {/* Divider curve */}
      <h2>Ofrecemos</h2>
      <div className='flex-fluid'>
        <BoxContent
          bg='bg-1'
          icon={<SiMaterialdesignicons />}
          title='Diseño web'
          description='Diseñamos y contruimos tu web a tu medida para que se ajuste a los estandares que brinde mayor competitividad a tu empresa.'
        />
        <BoxContent
          bg='bg-2'
          icon={<AiFillTool />}
          title='Mantenimiento'
          description='Realizamos mantenimiento de tu sitio web ya establecido brindando herramientas para mejorar su rendimiento y escalabilidad.'
        />
        <BoxContent
          bg='bg-3'
          icon={<AiOutlineFileSearch />}
          title='SEO'
          description='Nuestros profesionales en posicionamento web mantendrán su sitio en las primeras opciones de la búsqueda en google.'
        />
      </div>
      {/* Divider curve */}
      <div className='custom-shape-divider-top-1669514127'>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className='shape-fill' />
        </svg>
      </div>
      {/* Divider curve */}
    </div>
  )
}

export default HomeBoxes
