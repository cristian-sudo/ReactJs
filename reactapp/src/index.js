import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";



const Books=[

  { 
  ID:1,  
  Image: "https://images-na.ssl-images-amazon.com/images/I/A1ITodlM7JS._AC_UL200_SR200,200_.jpg",
  Title: "Change Sings: A Children's Anthem",
  Author: "Amanda Gorman"
},
  {
  ID:2, 
  Image: "https://images-na.ssl-images-amazon.com/images/I/A1ITodlM7JS._AC_UL200_SR200,200_.jpg",
  Title: "Change Sings: A Children's Anthem",
  Author: "Amanda Gorman"
  }, 
]

//An COMPONENT  that returns HTML
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


///For each element of the list it creates a book object
const AllBooks = Books.map((name)=>{
 return (
 <Book key={name.ID} Title={name.Title} Author={name.Author} Image={name.Image} />// or {...name}
 )
})


//The whole function that needs to be randered
function BookList(){
  return (
    <section className="BookList">
      {AllBooks}
    </section>
  );
}
////////////////////////////////////






//randering the function
ReactDOM.render(<BookList/>, document.getElementById("root"));