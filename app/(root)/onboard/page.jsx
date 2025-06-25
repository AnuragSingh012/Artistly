import ArtistForm from '@/components/ArtistForm'
import React from 'react'

const page = () => {
  return (
    <>
        <section className='hero_container !min-h-[230px]'>
            <h1 className='heading'>Onboard an Artist</h1>
        </section>
        <ArtistForm />
    </>
  )
}

export default page