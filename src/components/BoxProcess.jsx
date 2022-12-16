const BoxProcess = ({ number, text }) => {
  return (
    <div className='container-process w-30 flex-fluid'>
      <div className='procces-number flex-fluid'>
        <p>{number}</p>
      </div>
      <div className='process-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default BoxProcess
