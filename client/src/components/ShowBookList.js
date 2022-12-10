import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000')
      .then(res => { 
        this.setState({
          books: res.data.data
          
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList=>' + err);
      })
  };


  render() {
    const books=this.state.books
    console.log("PrintBook: " + books);
    let bookList ;

    if(!books) {
      bookList = "there is no book record!";
    } else { 

     
     bookList = books.map((book,k)=>//console.log(":" + book.title)
      <BookCard key={book._id} book=<h2>{book._id} <br/>{book.title} <br/> {book.excerpt} <br/> {book.userId} <br/> {book.ISBN}<br/> {book.category}<br/> {book.subcategory}<br/> {book.reviews}</h2>  />
      
    )
    }
    //console.log("PrintBook: " + books);
    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {bookList}
                {/* {console.log(bookList)} */}
                
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;