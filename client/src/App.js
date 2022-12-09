import { Component } from 'react';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<ShowBookList/>} />
          <Route path='/create-book' element={<CreateBook/>}/>
          <Route path='/books/:bookId' element={<UpdateBookInfo/>} />
          <Route path='/show-book/:id' element={<ShowBookDetails/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;