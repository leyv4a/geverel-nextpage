import React from 'react'
import NotFoundPage from '../../public/assets/NOTFOUND.webp'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MoveLeft } from 'lucide-react';
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='w-full min-h-[90vh] flex items-center justify-center flex-col'>
     <Image src={NotFoundPage} alt='La pagina que buscas no se encontró...' />
     <Button asChild className='bg-[#7e02b7] hover:bg-[#6e02a0]'>
        <Link href={'/'}>
          <MoveLeft/>
        </Link>
     </Button>
    </section>
  )
}
