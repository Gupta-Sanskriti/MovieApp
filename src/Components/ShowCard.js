
const ShowCard = (props) => {
  // console.log(props);
  const { id, image, genres, name, language, premiered } = props.props;
  return (
    <div className="flex gap-5 ">
      

      <img
        src={image?.original}
        alt={name}
        height="100px"
        width="100px"
        className="rounded max-h-[10rem] min-h-[9rem]"
        loading="lazy"
      />
      <div className="overflow-hidden">
        <h1 className="text-2xl">{name}</h1>
        <p className="text-lg line-clamp-2">Genres: {genres?.join(", ")}</p>
        <p className="text-sm">Language: {language}</p>
        <p className="text-sm">Premiered In : {premiered}</p>
      </div>
    </div>
  );
};

export default ShowCard;
