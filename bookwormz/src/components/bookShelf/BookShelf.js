import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Book, } from './Book'
import { BookStack, } from './Books.comp'

// res.volumeInfo.title                 STR
// res.volumeInfo.subtitle              STR
// res.volumeInfo.authors               ARR
// res.volumeInfo.publisher             STR
// res.volumeInfo.publishedDate         STR
// res.volumeInfo.description           TAG
// res.volumeInfo.pageCount             INT
// res.volumeInfo.printedPageCount      INT
// res.volumeInfo.categories            ARR
// res.volumeInfo.imageLinks.thumbnail  LNK
// res.volumeInfo.imageLinks.small      LNK

export const BookShelf_proto = ({ bookResults, }) => {
    useEffect(() => { }, [bookResults])
console.log(bookResults)

    return (
        <BookStack>
            {bookResults.map(book => (
                <Book />
            ))

            }
        </BookStack>
    )
}


BookShelf_proto.propTypes = {
    bookResults: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    bookResults: state.books.bookResults,
})

const BookShelf = connect(mapStateToProps, {  })(BookShelf_proto)
export { BookShelf }
