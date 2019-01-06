import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'

class Shelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    handleBooks: PropTypes.func.isRequired,
  }

  render(){
    const { 
      shelfTitle,
      books,
      handleBooks
    } = this.props;

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books && books.map((book) => (
              <li key={book.id}>
                <Book 
                  book={book}
                  handleBooks={handleBooks}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;
