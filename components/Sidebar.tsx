"use client"

import { videos } from '@/constant'
import { cn } from '@/lib/utils'
import { Youtube } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname()


    return (
        <aside className='border-r h-screen overflow-y-scroll'>
            {videos.map((video, index) => {
                const isActive = pathname.endsWith(video.id)

                return (
                    <React.Fragment key={video.id}>


                        <div className='mx-3 my-1 rounded-md overflow-hidden'>
                            <Link
                                className={cn("px-4 transition-all font- py-3 text-muted-foreground border-b block hover:bg-muted", isActive && "text-black bg-muted font-semibold")}

                                href={`${video.id}`}
                            >


                                <p> <span className='inline-flex transition-all items-center border rounded-md px-2 py-0.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto'>Class {index + 1}:</span> <span>{video.label}</span></p>

                            </Link>
                        </div>

                    </React.Fragment>
                )
            })}
        </aside>
    )
}

export default Sidebar