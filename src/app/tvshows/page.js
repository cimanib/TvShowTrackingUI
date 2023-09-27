
import React from 'react'
import Image from 'next/image'
import Styles from '../page.module.css'
import Link from 'next/link'

async function GetTvShows()
{
  const res = await fetch('http://localhost:5271/api/tvshows', {

    next: {
         revalidate :0
    }
  }
  )
  return await res.json()

}

export default async  function TvShow() {

    const tvshows  = await GetTvShows()
  return (
    <>
      <main className={Styles.grid}>     
        {Array.isArray(tvshows.data) ? 
         tvshows.data.map((tvshow)=>(
        <div key ={tvshow.tvShowId} className={Styles.card}>
        <Link href={`/tvshows/${tvshow.tvShowId}`}>
         <Image className={Styles.description}
            src={tvshow.coverImageUrl}
            height={200}
            width={200}
            alt='cover image'
         />
         <div> 
            <h4 className={Styles.description}>{tvshow.name}</h4>
            <h5 className={Styles.description}>{tvshow.description}</h5>
         </div>
         </Link>
        </div>
        )):null}
      </main>
      </>
      )
  }
