import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const Image="https://images-na.ssl-images-amazon.com/images/I/A1ITodlM7JS._AC_UL200_SR200,200_.jpg";
const Title="Change Sings: A Children's Anthem";
const Author="Amanda Gorman";


function BookList(){
  return (

<section className="BookList">
<Book/>
<Book/>
</section>

  );
}

const Book = (props) =>{
  const title="Change Sings: A Children's Anthem";
  return (
    <article className="Book">
      <img src={Image} alt="" />
      <h1>{Title}</h1>
      <h4>{Author}</h4>
    </article>
  )
}






ReactDOM.render(<BookList/>, document.getElementById("root"));