import React from 'react'
//import PropTypes from 'prop-types';
import Book from '../Book'

const Shelf = ( props ) => {
  const { 
    shelfTitle,
    books,
    handleBooks
  } = props;

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

export default Shelf;
