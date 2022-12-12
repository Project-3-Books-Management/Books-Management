import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
      
    };
  }

  componentDidMount() {

    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get(`http://localhost:5000/show-book/`+this.props.match.params.bookId)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      })
  };

  onDeleteClick (bookId) {
    axios
      .delete('http://localhost:5000/show-book/'+bookId)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };


  render() {

    const book = this.state.book;
    
    let BookItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ book.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Excerpt</td>
            <td>{ book.excerpt }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>User Id</td>
            <td>{ book.userId }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>ISBN</td>
            <td>{ book.ISBN }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>category</td>
            <td>{ book.category }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>subcategory</td>
            <td>{ book.subcategory }</td>
          </tr>

          <tr>
            <th scope="row">7</th>
            <td>reviews</td>
            <td>{ book.reviews }</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>releasedAt</td>
            <td>{ book.releasedAt }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
              <p className="lead text-center">
                  View Book's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Delete Book</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showBookDetails