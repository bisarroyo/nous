import { SiMaterialdesignicons } from 'react-icons/si'
import { AiOutlineFileSearch, AiFillTool } from 'react-icons/ai'
import BoxContent from '../components/BoxContent'

const HomeBoxes = () => {
  return (
    <div className='container home-boxes'>
      <h2>Ofrecemos</h2>
      <div className='flex-fluid'>
        <BoxContent
          icon={<SiMaterialdesignicons />}
          title='Diseño web'
          description='Diseñamos y contruimos tu web a tu medida para que se ajuste a los estandares que brinde mayor competitividad a tu empresa.'
        />
        <BoxContent
          icon={<AiFillTool />}
          title='Mantenimiento'
          description='Realizamos mantenimiento de tu sitio web ya establecido brindando herramientas para mejorar su rendimiento y escalabilidad.'
        />
        <BoxContent
          icon={<AiOutlineFileSearch />}
          title='SEO'
          description='Nuestros profesionales en posicionamento web mantendrán su sitio en las primeras opciones de la búsqueda en google.'
        />
      </div>
    </div>
  )
}

export default HomeBoxes
