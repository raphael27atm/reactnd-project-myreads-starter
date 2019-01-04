import React from 'react'
import Book from '../Book'

const Shelf = ( props ) => {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <Book 
              bookTitle={props.bookTitle}
              bookAuthor={props.bookAuthor}
            />
          </li>
          <li>
            <Book />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Shelf;
