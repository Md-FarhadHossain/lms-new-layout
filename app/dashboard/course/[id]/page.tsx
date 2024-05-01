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
    <aside className='p-8 lg:h-[70vh] md:h-[60vh] lg:shadow-none h-full shadow-lg lg:rounded-none rounded-2xl flex justify-center'>


      <iframe className='lg:h-[720px] lg:w-[1280px] w-full md:h-full h-[260px] sm:h-[400px] rounded-2xl' src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <br />

    </aside>
  )
}

export default VideoPage