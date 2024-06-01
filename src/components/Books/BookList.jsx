
import React, { useEffect, useState } from 'react';
import BookCart from './BookCart';


const BookList = () => {
   const [books, setBook ] = useState([])

    useEffect(()=>{
        fetch("data.json")
        .then((res)=> res.json())
        .then((data)=>{
            setBook(data)
        });

    },[]);

  return (
            <div className="book-list">
           <div className="row row-cols-1 row-cols-md-3 g-4">
                 {
                     books.map((book)=>(
                        
                         <BookCart key={book.id} book={book}/>
                        

                     ))
                 }

             </div>
            
         </div>

    
  );
};

export default BookList;


