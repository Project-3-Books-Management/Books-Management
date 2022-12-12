import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      excerpt: '',
      userId: '',
      ISBN: '',
      category: '',
      subcategory: '',
      reviews:'',
      releasedAt : ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/edit-book/'+this.props.match.params.bookId)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: this.state.title,
          excerpt: this.state.excerpt,
          userId: this.state.userId,
          ISBN: this.state.ISBN,
          category: this.state.category,
          subcategory: this.state.subcategory,
          reviews: this.state.reviews,
          releasedAt: this.state.releasedAt
        })
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      })
  };

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

    axios
      .put('http://localhost:5000/edit-book/'+this.props.params.bookId, data)
      .then(res => {
        this.props.history.push('/show-book/'+this.props.params.bookId);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                  Update Book's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
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
            <label htmlFor="excerpt">excerpt</label>
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
            <label htmlFor="userId">userId</label>
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
            <label htmlFor="ISBN">ISBN</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='ISBN'
                className='form-control'
                value={this.state.ISBN}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="category">Category</label>
              <input
                type='date'
                placeholder='category'
                name='category'
                className='form-control'
                value={this.state.category}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="subcategory">subcategory</label>
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
            <label htmlFor="reviews">reviews</label>
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
            <label htmlFor="releasedAt">releasedAt</label>
              <input
                type='text'
                placeholder='releasedAt of this Book'
                name='releasedAt'
                className='form-control'
                value={this.state.releasedAt}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateBookInfo;