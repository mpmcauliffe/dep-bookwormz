import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Book, } from './Book'
import { Spinner } from '../../components'
import { BookStack, } from './Books.comp'


export const MyBookShelf_proto = ({ myBooks, isLoading, }) => {
    useEffect(() => { }, [myBooks, isLoading])

    if (isLoading) { return <Spinner /> }
    
    // console.log(bookResults)
    
    
    return (
        <BookStack> 
        {/* */}{myBooks.map(book => (
                <Book
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


MyBookShelf_proto.propTypes = {
    myBooks: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,

}

const mapStateToProps = state => ({
    myBooks: state.books.myBooks,
    isLoading: state.books.isLoading,
})

const MyBookShelf = connect(mapStateToProps, {  })(MyBookShelf_proto)
export { MyBookShelf }
