import React, { Component } from 'react';
import { Link,Navigate } from 'react-router-dom';

import '../App.css';
import axios from 'axios';


class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      excerpt:'',
      userId:'',
      ISBN:'',
      category:'',
      subcategory:'',
      reviews :'',
      releasedAt :''

    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      excerpt: this.state.excerpt,
      userId: this.state.userId,
      ISBN: this.state.ISBN,
      category: this.state.category,
      subcategory: this.state.subcategory,
      reviews: this.state.reviews,
      releasedAt: this.state.releasedAt
    };
console.log(data)
    axios
      .post('http://localhost:5000/create-book', {data,Headers:{"Content-Type":"application/json"}})
      .then(res => {
        this.setState({
          title: '',
          excerpt:'',
          userId:'',
          ISBN:'',
          category:'',
          subcategory:'',
          reviews :'',
          releasedAt :''
        })
        Navigate('http://localhost:5000');
      })
      .catch(err => {
        console.log("Error in CreateBook!"+ err);
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">
                  Create new book
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='excerpt'
                    name='excerpt'
                    className='form-control'
                    value={this.state.excerpt}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='userId'
                    name='userId'
                    className='form-control'
                    value={this.state.userId}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='ISBN of this book'
                    name='ISBN'
                    className='form-control'
                    value={this.state.ISBN}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='category'
                    name='category'
                    className='form-control'
                    value={this.state.category}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='subcategory of this Book'
                    name='subcategory'
                    className='form-control'
                    value={this.state.subcategory}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='reviews of this Book'
                    name='reviews'
                    className='form-control'
                    value={this.state.reviews}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='releasedAt of this Book'
                    name='releasedAt'
                    className='form-control'
                    value={this.state.releasedAt}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;