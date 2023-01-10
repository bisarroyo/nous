import React, { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

// import containers
import Loader from '../components/Loader'

const schema = yup.object().shape({
  fullName: yup.string().required('Por favor ingrese su nombre').min('Debe tener al menos 2 caracteres'),
  email: yup.string().email('Debe ingresar un correo electrónico válido').required('Debe tener al menos 2 caracteres'),
  message: yup.string().required('Por favor escribe un mensaje')
})

const Form = () => {
  const form = useRef()

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const [contactData, setContactData] = useState({
    error: null,
    loading: false
  })

  const { loading, error } = contactData

  const sendEmail = (e) => {
    setContactData({
      ...contactData,
      loading: true
    })
    emailjs.sendForm('service_5qlkffn', 'template_4do2mlk', form.current, 'user_6jm6KpxJVyCrP322EtqhO')
      .then((result) => {
        setContactData({
          button: 'Message Sent!',
          loading: false
        })
        reset({
          fullName: '',
          email: '',
          message: ''
        })
      }, (err) => {
        setContactData({
          ...contactData,
          error: 'Message not sent, please try again'
        })
        console.log(err)
      })
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      className=''
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
      }}
    >
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div>
          <label>
            Nombre
            <input
              type='text'
              placeholder='Nombre'
              {...register('fullName', { required: true })}
            />
          </label>
        </div>

        <div>
          <label>
            Correo electrónico
            <input
              type='email'
              placeholder='Correo Electrónico'
              {...register('email', { required: true })}
            />
          </label>
        </div>

        <div>
          <label>
            Mensaje
            <textarea
              rows='3'
              type='text'
              placeholder='Mensaje'
              {...register('message', { required: true })}
            />
          </label>
        </div>

        <div>
          <button>
            {loading ? <Loader /> : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
