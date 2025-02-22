import React from 'react'
import { Link} from "react-router-dom"
import {  Star } from 'lucide-react';


export default function Book({book}) {
    const{image, bookName ,author,tags , category, bookId} = book;
  return (
    

      <Link to={`/books/${bookId}`}>

            <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure className='bg-[#F3F3F3] py-8 rounded-2xl '>
            <img
             src={image}
            className='h-[166px]'
                alt="Shoes" />
         </figure>
         <div className="card-body">
         <div className='flex justify-center gap-4 '>
                {
                 tags.map((tag, index) =><button key={index} className="btn btn-xs text-[#23BE0A]">{tag}</button>)
                }
            </div>
            <h2 className="card-title">
            {bookName}
             <div className="badge badge-secondary">NEW</div>
             </h2>
            <p>By:{author}</p>
            <div className="divider"></div>
            <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className='flex gap-2 '>
            <div>5.00</div>
            <Star />
         </div>
    </div>
  </div>
   </div>

      
      </Link>

  );
};
