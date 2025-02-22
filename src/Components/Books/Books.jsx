import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'

export default function Books() {
   const[books,setbooks]=useState([])

   useEffect(()=>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setbooks(data))
   },[])



  return (
    <div>
        <h2 className='text-4xl font-bold text-center'>Books</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
            books.map(book =><Book key={book.bookId} book={book}></Book>)
           }
        </div>
        
    </div>
  )
}
