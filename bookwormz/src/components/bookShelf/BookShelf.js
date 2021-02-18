import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Book, } from './Book'
import { Spinner } from '../../components'
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

export const BookShelf_proto = ({ bookResults, isLoading, }) => {
    useEffect(() => { }, [bookResults, isLoading])


    if (isLoading) { return <Spinner /> }

    return (
        <BookStack> 
        {/* */}{bookResults.map(book => (
                <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    authors={book.volumeInfo.authors}
                    publisher={book.volumeInfo.publisher}
                    publisherDate={book.volumeInfo.publisherDate}
                    description={book.volumeInfo.description}
                    pageCount={book.volumeInfo.pageCount}
                    printedPageCount={book.volumeInfo.printedPageCount}
                    categories={book.volumeInfo.categories}
                    image={book.volumeInfo.imageLinks.thumbnail} />
            ))

            } 
            
        </BookStack>
    )
}


BookShelf_proto.propTypes = {
    bookResults: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,

}

const mapStateToProps = state => ({
    bookResults: state.books.bookResults,
    isLoading: state.books.isLoading,
})

const BookShelf = connect(mapStateToProps, {  })(BookShelf_proto)
export { BookShelf }
