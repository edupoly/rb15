import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBooks } from './booksSlice'

function Books() {
    var books = useSelector(state=>state.books.books)
    var dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(GetBooks())
    },[])
    return (
        <div>
            <h1>Books</h1>
            <ul className='d-flex flex-wrap justify-content-around'>
            {
                books && books.map((book,i)=>{
                    return(
                        <li className='w-25 border p-3 m-3'>
                            {book.title}
                            <br></br>
                            <b>{book.author}</b>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Books