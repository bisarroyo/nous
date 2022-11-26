const BoxProcess = ({number, text}) => {
  return (
    <div className='container-process w-30'>
      <div className='procces-number'>
        <p>{number}</p>
      </div>
      <div className='process-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default BoxProcess
