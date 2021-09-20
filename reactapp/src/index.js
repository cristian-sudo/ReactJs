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

const Book = (props) =>{
 const {Image,Title,Author}=props
  return (
    <article className="Book">
      <img src={Image} alt="" />
      <h1>{Title}</h1>
      <h4>{Author}</h4>
    </article>
  )
}
const NewBooks = Books.map((name)=>{
 return (
 <Book key={name.ID} Title={name.Title} Author={name.Author} Image={name.Image} />
 )
})

function BookList(){
  return (
    <section className="BookList">
      {NewBooks}
    </section>
  );
}








ReactDOM.render(<BookList/>, document.getElementById("root"));