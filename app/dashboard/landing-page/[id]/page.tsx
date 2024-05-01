
type server_side = {
    id: string,

    // params: ReactNode
}

const LandingPageID = ({ params }: { params: server_side }) => {

    const { id } = params

    const url = `https://www.youtube.com/embed/${id}?rel=0&color=white`
    return (
        <aside className='p-8 lg:h-[70vh] md:h-[45vh] lg:shadow-none h-full shadow-lg lg:rounded-none rounded-2xl'>


            <iframe className='lg:h-[720px] lg:w-[full] w-full md:h-full h-[260px] sm:h-[400px] rounded-2xl' src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <br />

        </aside>
    )
}

export default LandingPageID