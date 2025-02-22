import React, { useEffect ,useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList, getStoredWistList } from '../../Utililty/AddTODb';
import Book from '../Book/Book';

export default function ListedBooks() {
    const [readList , setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(()=>{
     const storedReadList = getStoredReadList();
     const  storedReadListInt = storedReadList.map(id =>parseInt(id));
     console.log(storedReadList, storedReadListInt,allBooks)
     const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

     setReadList(readBookList)
    },[])

    const [wistlist,setWistlist] = useState([])
    const allwist =useLoaderData();

    useEffect(()=>{
      const storedWistList =getStoredWistList()
      const storedWistListInt = storedWistList.map(id =>parseInt(id))
      console.log(storedWistList, storedWistListInt, allwist)
      const wistBookList = allwist.filter(book => storedWistListInt.includes(book.bookId))

      setWistlist(wistBookList)
    },[])


  return (
    <div>
        <h3 className='text-3xl my-8'>listed books</h3>

        <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read List" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
         Book I read : {readList.length}
         <h2 className='grid grid-cols-2 gap-20'>
            {
                readList.map(book =><Book key={book.bookId} book={book}></Book>)
            }
         </h2>
        </div>

        <input
        type="radio"
        name="my_tabs_2"
         role="tab"
        className="tab"
        aria-label="Wish List"
        defaultChecked />
         <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        Book I Wisted:{wistlist.length}

        <h2 className='grid grid-cols-2 gap-20'>
          {
            wistlist.map(book =><Book key={book.bookId} book={book}></Book>)
          }
        </h2>
        </div>

      
</div>
</div>
  )
}
