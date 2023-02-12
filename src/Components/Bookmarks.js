import React from 'react'
import { useSelector } from 'react-redux'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'

const Bookmarks = () => {
  const bookmarked = useSelector(store=> store.bookmark.bookval);
  console.log(bookmarked)
  
  return (
    // <></>
    <div className='mt-20 '>
      <h1 className='text-3xl my-2 p-3 text-center flex justify-center'>Bookmarks <BsFillBookmarkHeartFill className='p-1 m-1'/></h1>
      <div className="text-xl text-center">BookMarked Item: {bookmarked.length}</div>
    </div>
  )
}

export default Bookmarks