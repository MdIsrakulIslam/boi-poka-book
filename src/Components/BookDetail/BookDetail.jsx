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
    <div className='flex flex-col lg:flex-row gap-10 py-5 px-4 sm:px-6 lg:px-8 items-center mt-20'>
  <div className='w-full lg:w-1/2'>
    <img src={image} className='w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto border rounded-md' alt='' />
  </div>
  <div className='w-full lg:w-1/2 text-center lg:text-left'>
    <h2 className='font-bold text-3xl sm:text-5xl lg:text-6xl'>{bookName}</h2>
    <p className='pt-2 font-semibold'>By: {author}</p>
    <div className='divider'></div>
    <p>{category}</p>
    <div className='divider'></div>
    <p><span className='font-bold'>Review: </span>{review}</p>
    <p className='pt-2'><span className='font-bold'>Tag: </span><span className='gap-4'>{tags}</span></p>
    <div className='divider'></div>
    <div>
      <p><span className='font-bold'>Number of Pages: </span>{totalPages}</p>
      <p><span className='font-bold'>Publisher: </span>{publisher}</p>
      <p><span className='font-bold'>Year of Publishing: </span>{yearOfPublishing}</p>
      <p><span className='font-bold'>Rating: </span>{rating}</p>
    </div>
    <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-9'>
      <button onClick={() => handleMarkAsRead(bookId)} className='border rounded-md p-2 font-bold'>Read</button>
      <button onClick={() => handleMarkAsWist(bookId)} className='border rounded-md text-white bg-[#50B1C9] p-2 font-bold'>Wishlist</button>
    </div>
  </div>
</div>

  )
}
