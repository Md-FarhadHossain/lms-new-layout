"use client"

import { videos } from '@/constant'
import { useParams, usePathname, useRouter } from 'next/navigation'

import React, { ReactNode } from 'react'

type videos  = {
    id: string,
    url1: string,
    url2: string,
    // params: ReactNode
}

const VideoPage = ({params} : {params: videos}) => {
    console.log("params",params)
   const {id, url1, url2} = params 

   const param =  useParams() 
   console.log(param)
   const pathname = usePathname()
   console.log(pathname)

   const router = useRouter()
   console.log("router", router)


  return (
    <div>VideoPage = {id}
 

     <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


    
    </div>
  )
}

export default VideoPage