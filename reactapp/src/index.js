import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";



const Books=[

  { Image: "https://images-na.ssl-images-amazon.com/images/I/A1ITodlM7JS._AC_UL200_SR200,200_.jpg",
  Title: "Change Sings: A Children's Anthem",
  Author: "Amanda Gorman"
},
  {
     Image: "https://images-na.ssl-images-amazon.com/images/I/A1ITodlM7JS._AC_UL200_SR200,200_.jpg",
  Title: "Change Sings: A Children's Anthem",
  Author: "Amanda Gorman"
  }, 
]

const names =["ion", "ossas"]
function BookList(){
  return (
    <section className="BookList">
    {names}
    </section>
  );
}

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






ReactDOM.render(<BookList/>, document.getElementById("root"));