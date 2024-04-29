import { videos } from '@/constant'

import React, { ReactNode } from 'react'

type videos = {
  id: string,

  // params: ReactNode
}

const VideoPage = ({ params }: { params: videos }) => {

  const { id } = params

  const url = `https://www.youtube.com/embed/${id}?rel=0&color=white`





  return (
    <aside className='p-8 h-[70vh]'>
      
      VideoPage = {id}

      <iframe className='h-full w-full rounded-xl' src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
<br />

    

    </aside>
  )
}

export default VideoPage