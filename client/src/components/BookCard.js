import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;
console.log("bookcard  "+book)
    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-caro/cairo-provisional-v3/%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to= {`http://localhost:5000/show-book/${book._id}`}
                    >
                       <h2 style={{"color":"white","fontFamily":"fb", "paddingTop":"0px","paddingLeft":"20px"}}> {book } </h2>
                    </Link>
                </h2>
                {/* <h3>{book.title}</h3>
                <p>{book}</p> */}
            </div>
        </div>
    )
};

export default BookCard;