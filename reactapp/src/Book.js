import React from 'react'

const Book = (props) =>{
 const {Image,Title,Author}=props//map the props in local variables
 const ClickHandler = (Author) =>{
   console.log(Author);//make this event as a function because it will render once i clicked not after
 }
  return (
    <article className="Book">
      <img src={Image} alt="" />
      <h1 onClick={()=>{console.log(Title)}}>{Title}</h1>
      <h4>{Author}</h4>
      <button type="button" onClick={()=>ClickHandler(Author)}>Prova</button>
    </article>
  )
}

export default Book


