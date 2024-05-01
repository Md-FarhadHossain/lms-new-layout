"use client"

import { landingPage, serverSide, videos } from '@/constant'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname()

    const server = pathname.includes("server-side")
    const courses = pathname.includes("course")
    const landingpage = pathname.includes("landing-page")

    const handleClick = () => {
        console.log("clcked")
        console.log(pathname)
        localStorage.setItem('lastVideo', pathname);
    }

    return (
        <aside className='border-r h-screen overflow-y-scroll pt-4 sidebar pb-40'>
            {/* facebook marketing */}
            {courses ? videos.map((video, index) => {
                const isActive = pathname.endsWith(video.id)

                return (
                    <React.Fragment key={video.id}>


                        <div onClick={handleClick} className='mx-3 my-1 rounded-md overflow-hidden'>
                            <Link
                                className={cn("px-4 transition-all font- py-3 text-muted-foreground border-b block hover:bg-sky-100 hover:text-black", isActive && "text-black bg-sky-300/50 font-semibold transition-all")}

                                href={`${video.id}`}
                            >


                                <p> <span className={cn("inline-flex transition-all items-center border rounded-md px-2 py-0.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto mr-1", isActive && "bg-red-500 text-white transition-all")}>
                                    Class {index + 1}:
                                </span>
                                    <span>{video.label}</span>
                                </p>

                            </Link>
                        </div>

                    </React.Fragment>
                )
            }) : null}

            {/* Server side */}
            {server ? serverSide.map((server, index) => {
                const isActive = pathname.endsWith(server.id)

                return (
                    <React.Fragment key={server.id}>


                        <div className='mx-3 my-1 rounded-md overflow-hidden'>
                            <Link
                                className={cn("px-4 transition-all font- py-3 text-muted-foreground border-b block hover:bg-muted", isActive && "text-black bg-muted font-semibold")}

                                href={`${server.id}`}
                            >


                                <p> <span className='inline-flex transition-all items-center border rounded-md px-2 py-0.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto'>Class {index + 1}:</span> <span>{server.label}</span></p>

                            </Link>
                        </div>

                    </React.Fragment>
                )
            }) : null}

            {/* Landing Page */}
            {landingpage ? landingPage.map((landing, index) => {
                const isActive = pathname.endsWith(landing.id)

                return (
                    <React.Fragment key={landing.id}>


                        <div className='mx-3 my-1 rounded-md overflow-hidden'>
                            <Link
                                className={cn("px-4 transition-all font- py-3 text-muted-foreground border-b block hover:bg-muted", isActive && "text-black bg-muted font-semibold")}

                                href={`${landing.id}`}
                            >


                                <p> <span className='inline-flex transition-all items-center border rounded-md px-2 py-0.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto'>Class {index + 1}:</span> <span>{landing.label}</span></p>

                            </Link>
                        </div>

                    </React.Fragment>
                )
            }) : null}
        </aside>
    )
}

export default Sidebar