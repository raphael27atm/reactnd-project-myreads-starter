import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Shelf from './Shelf';

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleBooks: PropTypes.func.isRequired,
  }

  getBooksByShelf = (shelf) => {
    const { books } = this.props

    return books.filter((book)=> book.shelf === shelf)
  }

  render(){
    const { 
      handleBooks, 
    } = this.props;
    
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            shelfTitle='Currently Reading'
            handleBooks={handleBooks}
            books={this.getBooksByShelf('currentlyReading')}
          />
          <Shelf
            shelfTitle='Want to Read'
            handleBooks={handleBooks}
            books={this.getBooksByShelf('wantToRead')}
          />
          <Shelf
            shelfTitle='Read'
            handleBooks={handleBooks}
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
