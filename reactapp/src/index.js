import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {Books} from "./Books";//import the object books drom the pack(no extension required)
import Book from "./Book"//default import(the whole page)

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

//randering the function
ReactDOM.render(<BookList/>, document.getElementById("root"));