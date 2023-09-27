import React from 'react'
import Styles from './../../page.module.css'
import Image from 'next/image'

async function GetTvShow(id)
{
  const url ='http://localhost:5271/api/tvshows/'+ id + '/episodes'
  const res = await fetch(url, {

    next: {
         revalidate :0
    }
  }
  )
  return await res.json()

}

export default async function TvShowDetails({params}) {
    const id  = params.id
    const response = await GetTvShow(id)

   const {name , description ,coverImageUrl,episodes} = response.data

   console.log(episodes)
 
  return (
    <>
    <main className = {Styles.grid}>   

     {episodes?.length === 0 ? <div> no available episodes to watch for  tv show - {name}</div>:  
      Array.isArray(episodes) ? 
       episodes.map((tvshow)=>(
      <div key ={tvshow.id} className={Styles.card}>
       <Image className={Styles.description}
          src={tvshow.coverImageUrl}
          height={200}
          width={200}
          alt='cover image'
       />
        <h4 className={Styles.description}>{tvshow.name}</h4>
        <h5 className={Styles.description}>{tvshow.description}</h5>
      </div>
      
      )):null}
    </main>
    </>
  )
}
