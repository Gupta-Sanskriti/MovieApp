import useAllMovies from "../utils/useAllMovies";


const Body = () =>{

    const shows = useAllMovies();

    const unique = new Set(shows.map((show)=>{
        return show
    }))

    const uniqueShows= [...unique]
    console.log(uniqueShows)
    
    return(
        <div className="">
            <div className="h-[100vh] bg-[url('./assets/Best-Movies-bg.jpg')] bg-no-repeat bg-cover bg-center text-white p-0 m-0 ">
                <div className=" bg-black/60 h-[100vh] ">
                    <div className="flex flex-col place-content-center ">
                        <div className="p-[15.5rem] font-extralight font-sans">
                            <h1 className="text-6xl font-bold text-white">It's your</h1>
                            <h2 className="text-9xl  text-gray-100 pb-2">MovieApp</h2>
                            <p className="text-2xl text-justify tracking-widest">
                            Watch your favourite movie anytime anywhere !!!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-10">
                Genres
            </div>
        </div>
    )
}

export default Body;