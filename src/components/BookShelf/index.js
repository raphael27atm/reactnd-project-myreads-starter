import React, { Component } from 'react';
import Shelf from './Shelf';

class BookShelf extends Component {
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            shelfTitle="Shelf Title"
            bookTitle="Book Title"
            bookAuthor="Book Autor"
          />
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;
