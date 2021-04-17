import React, { Fragment, useState, useEffect, } from 'react'
import { Link, } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Book, } from './Book'
import { EmptyNotification, Spinner } from '../../components'
import { BookStack, CascadeArrow, CascadeArrowContainer, } from './Books.comp'


export const MyBookShelf_proto = ({ myBooks, isLoading, }) => {
    const [isBookShelfOpen, setIsBookShelfOpen] = useState(true)

    const handleCascadeArrow = () => setIsBookShelfOpen(!isBookShelfOpen)

    useEffect(() => { }, [myBooks, isLoading])

    if (isLoading) { return <Spinner /> }
    // console.log(myBooks)
    if (myBooks.length < 1) { 
        return (
            <EmptyNotification library>
                <span>You don't have any saved books.</span>&nbsp;&nbsp;
                <Link to='/books'>
                    <span className='trigger'>Search library.</span>
                </Link>
            </EmptyNotification>
        ) 
    } 
    
    return (
        <Fragment>
            <CascadeArrowContainer>
                <CascadeArrow 
                    onClick={handleCascadeArrow}
                    className='fas fa-caret-up fa-5x'
                    isBookShelfOpen={isBookShelfOpen} />
            </CascadeArrowContainer>
    
            <BookStack
                isBookShelfOpen={isBookShelfOpen}
                openHeight={(myBooks.length * 17).toString()}> 
                {/* */}
                {myBooks.map(book => (
                    <Book
                        removeButton={true}
                        key={book.bookId}
                        bookId={book.bookId}
                        title={book.title}
                        subtitle={book.subtitle}
                        authors={book.authors}
                        publisher={book.publisher}
                        publisherDate={book.publisherDate}
                        description={book.description}
                        pageCount={book.pageCount}
                        printedPageCount={book.printedPageCount}
                        categories={book.categories}
                        infoLink={book.infoLink}
                        image={typeof book.image !== 'undefined' 
                            ? book.image
                            : null } />
                    ))
                } 
            </BookStack>
            <hr/>
        </Fragment>
        
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
