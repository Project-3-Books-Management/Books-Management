import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import './App.css'
import Register from './UserComponents/Register';
import Login from './UserComponents/Login';

class App extends Component {

  render() {

    return (

      <Router>
        <Routes>
          <Route path='/register'  element={<Register />}></Route>

          <Route path='/login' element={<Login />}></Route>
        </Routes>

        <Routes>
          <Route exact path='/' element={<ShowBookList />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route path='/edit-book/:bookId' element={<UpdateBookInfo />} />
          <Route path='/show-book/:bookId'
            render={(matchProps) => {
              <ShowBookDetails {...matchProps} {...this.props} handleMatch={this.handleMatch} element={<ShowBookDetails />} />
            }}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;