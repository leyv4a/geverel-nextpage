import React from 'react'
import NotFoundPage from '../../public/assets/NOTFOUND.webp'
import Image from 'next/image'

export default function NotFound() {
  return (
    <section className='w-full min-h-full flex items-center justify-center '>
     <Image src={NotFoundPage} alt='La pagina que buscas no se encontro...' />
    </section>
  )
}
