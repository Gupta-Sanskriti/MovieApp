import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";

const Episodes = (...props) => {
  const { id, image ,name, summary, rating} = props[0].props;
  // console.log(props[0].props);
  return (
    
      <div className="flex justify-between shadow-lg my-5 p-5 rounded-xl  hover:bg-slate-800 hover:rounded-xl hover:ease-in-out hover:duration-300 hover:text-white">
        <div className="w-[30%] ">
          <img src={image?.medium} alt="" className=" rounded-lg "/>
        </div>
        <div className="w-[65%] ">
          <h1 className="text-2xl">{name}</h1>
          <h2 className="">{rating.average} Rating</h2>
          <p dangerouslySetInnerHTML={{ __html: summary }} className="line-clamp-3 bottom-0 "></p>
        </div>
        <div className="w-[5%] flex justify-center text-center text-3xl"><BsPlayCircleFill/></div>
      </div>
   
  );
};

export default Episodes;
