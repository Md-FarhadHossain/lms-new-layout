import { title, videos } from '@/constant'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {

    

    return (
        <>
            {videos.map(video => <React.Fragment key={video.id}>
                
                <Link className='ps-4 transition-all py-3 border-b block hover:bg-blue-300 transition-none' href={`${video.id}`}>{video.label}</Link>
            </React.Fragment>)}
        </>
    )
}

export default Sidebar