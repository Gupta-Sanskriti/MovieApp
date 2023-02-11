const ShowCard = (props) => {
    const {id, image,genres, name , language, premiered} = props.props;
    console.log(props)
    return(
        <div className="flex gap-5 ">
            <img src={image?.original} alt={name} height="100px" width="100px" className="rounded"/>
            <div>
            <h1 className="text-2xl">{name}</h1>
            <p className="text-lg">Genres: {genres?.join(", ")}</p>
            <p className="text-sm">Language: {language}</p>
            <p className="text-sm">Premiered In : {premiered}</p>
            </div>
            
        </div>
    )
}

export default ShowCard;