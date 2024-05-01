import DashboardNavbar from '@/components/DashboardNav'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { dashboardContent } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {

    return (
        <>
        <DashboardNavbar />
            <section className='container mx-auto'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                    {dashboardContent.map(card => <Link href={`${card.href}`} key={card.title} className='rounded-lg overflow-hidden cardLink'>

                        <Card>
                            <CardHeader className='p-0 overflow-hidden'>
                                <Image className='w-full h-full object-cover' width={280} height={30} src={card.thumbnail} alt={card.title} />
                            </CardHeader>

                            <CardContent className='px-4 pt-4'>
                                <h2 className='cardTitle text-xl font-medium h-12'>{card.title}</h2>
                            </CardContent>
                        </Card>
                    </Link>)}
                </div>

            </section>
        </>
    )
}

export default Dashboard