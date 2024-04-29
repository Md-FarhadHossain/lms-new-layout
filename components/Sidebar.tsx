"use client"

import { videos } from '@/constant'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname()
  

    return (
        <aside className='border-r h-screen'>
            {videos.map(video => {
                const isActive = pathname.endsWith(video.id)

                return (
                    <React.Fragment key={video.id}>
                
               
                <Link 
                    className={cn("ps-4 transition-all py-3 border-b block hover:bg-blue-300", isActive && "text-red-800 bg-blue-300")}

                    href={`${video.id}`}
                    >
                        {video.label}
                    </Link>
               
            </React.Fragment>
                )
            })}
        </aside>
    )
}

export default Sidebar