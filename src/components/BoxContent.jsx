const BoxContent = ({ title, description, icon }) => {
  return (
    <div className='container-box w-30'>
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
  )
}

export default BoxContent
