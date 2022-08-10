import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { GetBooks,AddBook } from '../../app/services/countries.service'

function Books() {
    var [newbook,setnewbook] = useState({
        "title": "",
        "author": "",
      })
    var books = useSelector(state=>state.books)
    var dispatch = useDispatch()
    useEffect(()=>{
        dispatch(GetBooks({fn:'asd',a:34}))
    },[])
  return (
    <div>
        <h1>Books</h1>
        <input type="text" placeholder='title' onKeyUp={(e)=>{setnewbook({...newbook,title:e.target.value})}}/> <br />
        <input type="text" placeholder='author' onKeyUp={(e)=>{setnewbook({...newbook,author:e.target.value})}}/> <br />
        <button onClick={()=>{dispatch(AddBook(newbook))}}>Add Book</button>
        <b>{JSON.stringify(books)}</b>
    </div>
  )
}

export default Books