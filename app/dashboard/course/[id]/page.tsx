import { videos } from '@/constant'

import React, { ReactNode } from 'react'

type videos = {
  id: string,
  url1: string,
  url2: string,
  // params: ReactNode
}

const VideoPage = ({ params }: { params: videos }) => {

  const { id } = params


  return (
    <aside className='p-8 h-[90vh]'>
      
      VideoPage = {id}

      <iframe className='h-full w-full' src={`https://www.youtube.com/embed/${id}?rel=0&color=white`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    </aside>
  )
}

export default VideoPage