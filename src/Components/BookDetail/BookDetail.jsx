import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList, addToStoreWistList } from '../../Utililty/AddTODb';

export default function BookDetail() {
    const {bookId} = useParams();
    const data =useLoaderData()
    const id = parseInt(bookId)
    const book=data.find(book => book.bookId===id)
    

    const{bookId: currentBookId, image ,bookName,author,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book;

    const handleMarkAsRead =(id) =>{
      addToStoreReadList(id)

    }
    const handleMarkAsWist =(id)=>{
      addToStoreWistList(id)
    }

  return (
    <div className='flex gap-10  h-[711px] ml-6'>
       <div>
        <img src={image} className='w-[3170px] border rounded-md' alt="" />
       </div>
       <div>
          <h2 className='text-5xl font-bold'>{bookName}</h2>
          <p className='pt-2 font-semibold'>By:{author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p><span className='font-bold'>Review:</span>{review}</p>
          <p className='pt-2'><span className='font-bold'>Tag</span> <span className='gap-4'>{tags}</span></p>
          <div className="divider"></div>
          <div>
            <p>Number of Pages:{totalPages}</p>
            <p>Publisher:<span>{publisher}</span></p>
            <p>Year fo Publishing: <span>{yearOfPublishing}</span></p>
            <p>Rating: <span>{rating}</span></p>

          </div>
          <div className='flex gap-5 pt-9'>
          <button onClick={()=>handleMarkAsRead(bookId)} className='border rounded-md p-2 font-bold'>Read</button>
          <button onClick={()=>handleMarkAsWist(bookId)} className='border rounded-md text-white bg-[#50B1C9] p-2 font-bold'>Wishlist</button>
          </div>
       </div>
    </div>
  )
}
