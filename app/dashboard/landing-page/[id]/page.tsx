
type server_side = {
    id: string,

    // params: ReactNode
}

const LandingPageID = ({ params }: { params: server_side }) => {

    const { id } = params

    const url = `https://www.youtube.com/embed/${id}?rel=0&color=white`
    return (
        <div>
            <aside className='p-8 h-[70vh]'>

                VideoPage = {id}

                <iframe className='h-full w-full rounded-xl' src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <br />



            </aside>
        </div>
    )
}

export default LandingPageID