import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Book, } from './Book'
import { Spinner } from '../../components'
import { BookStack, } from './Books.comp'


export const BookShelf_proto = ({ bookResults, isLoading, }) => {
    useEffect(() => { }, [bookResults, isLoading])

    if (isLoading) { return <Spinner /> }
    
    //console.log(bookResults)
    
    
    return (
        <BookStack isBookShelfOpen={true}> 
        {/* */}{bookResults.map(book => (
                <Book
                    removeButton={false}
                    key={book.id}
                    bookId={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    authors={book.volumeInfo.authors}
                    publisher={book.volumeInfo.publisher}
                    publisherDate={book.volumeInfo.publisherDate}
                    description={book.volumeInfo.description}
                    pageCount={book.volumeInfo.pageCount}
                    printedPageCount={book.volumeInfo.printedPageCount}
                    categories={book.volumeInfo.categories}
                    infoLink={book.volumeInfo.infoLink}
                    image={typeof book.volumeInfo.imageLinks !== 'undefined' 
                        ? book.volumeInfo.imageLinks.thumbnail
                        : null } />
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
