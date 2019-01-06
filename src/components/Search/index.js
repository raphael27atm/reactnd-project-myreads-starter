import React,{ Component } from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { search } from '../../BooksAPI'
import Book from '../BookShelf/Book'

class Search extends Component {
  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    handleBooks: PropTypes.func.isRequired,
  }

  state = {
    query: '',
    books: []
  }

  searchBooks = (query) => {
    if (!query) {
      this.setState({query: '', books: []})
    } else {
      this.setState({ query: query.trim() })
      search(query).then((books) => {
        if (books.error) {
          books = []
        }
        books.map(book => (this.props.booksOnShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState(() => ({
          books
        }))
      })
    }
  }

  render(){
    const { books } = this.state
    const { handleBooks } = this.props
    
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={ (e) => this.searchBooks(e.target.value) }
              />

          </div>
        </div>
        <div className="search-books-results">
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

export default Search;