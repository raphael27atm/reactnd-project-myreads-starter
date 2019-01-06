import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import BookShelf from './components/BookShelf'

import './App.css'

class BooksApp extends React.Component {
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
  
  handleBooks = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
  }
  
  render() {
    const { 
      books,
    } = this.state

    return (
      <div className="app">
        <Route 
          exact 
          path='/' 
          render={() => (
            <BookShelf 
              books={books}
              handleBooks={this.handleBooks}
            />
          )}
        />
        <Route 
          path='/search' 
          render={(props) => (
            <Search 
              booksOnShelf={books}
              handleBooks={this.handleBooks}
              history={props.history}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
