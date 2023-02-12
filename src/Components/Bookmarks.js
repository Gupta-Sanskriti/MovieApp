import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsFillBookmarkHeartFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import ShowCard from './ShowCard';
import ShimmerBookmark from './ShimmerBookmark';
import {clearBookmark} from '../Redux/bookmarkSlice';

const Bookmarks = () => {
  const bookmarked = useSelector(store=> store.bookmark.bookval);
  console.log(bookmarked)

  const dispatch = useDispatch();
  const removebkmrk = () =>{
    dispatch(clearBookmark())
  }
  
  return (
    // <></>
    <div className='mt-20 '>
      <h1 className='text-3xl my-2 p-3 text-center flex justify-center font-bold'>Bookmarks <BsFillBookmarkHeartFill className='p-1 m-1'/></h1>
      <div className="text-xl text-center">BookMarked Item: {bookmarked.length}</div>
      <div className="md:grid md:grid-cols-3 md:place-content-evenly gap-5 p-10 shadow rounded-2xl m-0">
                {bookmarked.length === 0? (<ShimmerBookmark/>) : (
                    bookmarked.map((show)=>(
                        <div key={show.id} className="hover:bg-slate-800 hover:text-white hover:rounded-lg shadow-lg p-5 rounded-lg flex">
                            <Link  to={'/movies/'+ show.id} className="">
                                <ShowCard props={show}/>
                            </Link>
                            {/* <BsBookmarkHeart className={bookmarkColor+ " text-3xl"} onClick={()=>{
                                addToBookmark(show, show.id) 
                                
                            }}/> */}

                        </div>
                        
                    
                    ))
                )}
            </div>
    </div>
  )
}

export default Bookmarks