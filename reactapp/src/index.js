import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function BookList(){
  return (
<section className="BookList">
<Book/>
<Book/>
<Book/>
<Book/>
<Book/>
<Book/>

</section>
  );
}

const Book = () =>{
  return (
    <article className="Book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

const Image = () =>{
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/A1ITodlM7JS._AC_UL200_SR200,200_.jpg" alt="" />
  )
}

const Title =()=>{
  return (
<h1 style={{color:"red", fontSize:"0.75rem", marginTop:"0.25rem"}}>Change Sings: A Children's Anthem</h1>
  );
}
const Author =()=>{
  return (
<h4>Amanda Gorman</h4>
  );
}

ReactDOM.render(<BookList/>, document.getElementById("root"));