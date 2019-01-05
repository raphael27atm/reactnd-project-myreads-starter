import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf';
import * as BooksAPI from '../../BooksAPI'

class BookShelf extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) =>{
        this.setState(() => ({
          books
        }))
      })
  }

  getBooksByShelf(shelf){
    return this.state.books.filter((book)=> book.shelf === shelf)
  }
  
  handleBooks = (bookChanged, shelf) => {
    this.setState((currentState) => ({
      books : currentState.books.map(book => book.id === bookChanged.id ? ({...book, shelf: shelf}): book)
    }))
    
    this.updateShelf(bookChanged, shelf)
  }

  updateShelf(bookChanged, shelf){
    BooksAPI.update(bookChanged, shelf)
  }

  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            shelfTitle='Currently Reading'
            handleBooks={this.handleBooks}
            books={this.getBooksByShelf('currentlyReading')}
          />
          <Shelf
            shelfTitle='Want to Read'
            handleBooks={this.handleBooks}
            books={this.getBooksByShelf('wantToRead')}
          />
          <Shelf
            shelfTitle='Read'
            handleBooks={this.handleBooks}
            books={this.getBooksByShelf('read')}
          />
          <div className="open-search">  
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;
