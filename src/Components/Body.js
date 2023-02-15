import useAllMovies from "../utils/useAllMovies";
import Genres from "./Genres";


const Body = () =>{

    const shows = useAllMovies();

    // console.log(shows)
    let newarr= []
    const unique = shows.map((show)=>{
        let a= show.genres;
        newarr.push(...a)
        
    })
    const uniqueGenre =[... new Set(newarr)]
    // console.log(uniqueGenre)
    
    return(
        <div className="">
            <div className="h-[100vh] bg-[url('./assets/Best-Movies-bg.jpg')] bg-no-repeat bg-cover bg-center text-white p-0 m-0 ">
                <div className=" bg-black/60 h-[100vh] ">
                    <div className="flex flex-col place-content-center ">
                        <div className="p-[15.5rem] font-extralight font-sans">
                            <h2 className="text-9xl  text-cyan-500 pb-2">MovieApp</h2>
                            <p className="text-2xl text-justify tracking-widest">
                            Watch your favourite movie anytime anywhere !!!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-4xl p-10">What's for today?</h1>
                <div className="">
                {uniqueGenre.map((gen)=>(
                    <Genres key={gen} prop={gen} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Body;