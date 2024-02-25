'use client'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '@/validations/userSchema'
import '@/styles/form.css'
import { object } from 'zod'

interface Inputs {
  name: string
  lastname: string
  email: string
  phoneNumber: string
  message: string
}

export const Form = () => {
  const { register, handleSubmit, formState:{errors}, watch} = useForm<Inputs>({
    resolver: zodResolver(userSchema)
  })
  console.log(errors)
  return (
    <form onSubmit={handleSubmit(data => {
      console.log('data..',Object.entries(data))
      //console.log('22e',errors)
    })}
    className='form'>
      <Input 
      title='Nombres'
      type='text'
      name='name'
      register={register}
      error={errors.name?.message}
      />
      <Input
      title='Apellidos'
      type='text'
      name='lastname'
      register={register}
      />
      <Input
      title='Correo'
      type='email'
      name='email'
      register={register}
      />
      <Input
      title='Telefono'
      type='tel'
      name='phoneNumber'
      register={register}
      />
      <Input
      title='Mensaje'
      type='text'
      name='message'
      register={register}
      />
      <button type="submit">Enviar</button>
      <div>{JSON.stringify(watch(), null, 2)}</div>
        
    </form>
  )
}
