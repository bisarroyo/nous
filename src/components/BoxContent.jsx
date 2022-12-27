const BoxContent = ({ title, description, icon, bg }) => {
  return (
    <div className={`bg ${bg} w-30`}>
      <div className='container-box '>
        <div className='box-icon'>
          {icon}
        </div>
        <div className='box-title'>
          <h3>{title}</h3>
        </div>
        <div className='box-text'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default BoxContent
