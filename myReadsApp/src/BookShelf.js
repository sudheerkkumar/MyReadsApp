import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

class BookShelf extends Component {


  generateShelfName = (shelf) => {
    let shelfName = shelf.split(/(?=[A-Z])/).join(" ");
    return shelfName.charAt(0).toUpperCase() + shelfName.slice(1);
  }

  render() {
    const {books, onChangeShelf}  = this.props
    const shelves = ['currentlyReading', 'wantToRead', 'read']

    return(
      <div>
        {shelves.map((shelf, index) =>
          <section className="shelf-title" key={index}>
            <h2>{this.generateShelfName(shelf)}</h2>
            <ul className="books-list">
              {books.filter(book => book.shelf === shelf)
              .map(book => (
                <Book
                  onChangeShelf={onChangeShelf}
                  book={book}
                  shelf={shelf}
                  key={book.id}
                />
              ))}
            </ul>
          </section>
        )}
        <Link
          to="/search"
          className="add-button">
          Search
        </Link>
      </div>
    )
  }
}

export default BookShelf
