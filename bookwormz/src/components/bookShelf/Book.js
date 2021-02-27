import React, { Fragment, useState, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addBook } from '../../redux/actions/bookActions'
import { BookCover, } from './Books.comp'
import { AppButton, } from '../../components'
import { truncate } from '../../helpers/truncate'


export const Book_proto = ({ 
    addBook,
    bookId, title, subtitle, authors, publisher, publisherDate, infoLink, 
    description, pageCount, printedPageCount, categories, image, 
    removeButton,
}) => { 
    const [isBookOpen, setIsBookOpen] = useState(false)
    //const [scrollHeight, setScrollHeight] = useState(0)

    const OpenBook = (e, element) => setIsBookOpen(!isBookOpen)

    const addBookToQueue = e => {
        // addBook(e.target.name.trim(), e.target.title.trim())
        addBook({ bookId, title, authors, publisher, publisherDate, infoLink, 
            description, pageCount, printedPageCount, categories, image, })
        e.stopPropagation()
    }


    return (
        <Fragment>
            {/*
              */}
            <BookCover onClick={(e) => OpenBook(e, this)} isBookOpen={isBookOpen}>
                <img src={`${image}`} alt='book-cover' className='cover' />
                <div className='right-cell'>
                    <p className='title'><strong>{truncate(title)}</strong></p>
                    
                    {/* <p className='subtitle'><em>{truncate(subtitle, 55)}</em></p> */}
                    
                    <div>
                        {Array.isArray(authors) 
                            && authors.map((author, i) => {
                                return i < 3 
                                    ? <span 
                                        key={`${author}_${i}`}
                                        className='author'>
                                        {truncate(author, 25)}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    : i === 4
                                        ? <span
                                            key='author' 
                                            className='author'>...</span>
                                        : null
                                })}
                    </div>
                    <div>
                        <AppButton
                            name={bookId}
                            title={title}
                            onClick={addBookToQueue}
                            style={{ float: 'right' }}
                            alertButton={removeButton} >
                        {removeButton ? 'Remove' : 'Add Book'}</AppButton>
                    </div>
                </div>
                <div className='body'>
                    <p><strong>Description</strong></p>
                    <p>{truncate(description, 1000)}</p>
                    <br/><br/>
                    <p><strong>Categories</strong></p>
                    <Fragment>
                        {Array.isArray(categories)
                            && categories.map(category => <span 
                                key={category}
                                className='info'>
                                {category}&nbsp;&nbsp;&nbsp;&nbsp;</span>)
                        }
                    </Fragment>
                    <br/><br/><br/><br/>
                    <p><strong>Page Count</strong></p>
                    <span className='info'>Digital: {pageCount}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='info'>Print: {printedPageCount}</span>
                    <br/><br/><br/><br/>
                    <p><strong>Publisher</strong></p>
                    <span className='info'>{publisher}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='info'>{publisherDate}</span>
                    <br/><br/><br/><br/>
                    <span className='info'><a href={`${infoLink}`}>View on Google Books</a></span>
                </div>
            </BookCover>
        </Fragment>
        
    )
}
// addBook,
//     bookId, title, subtitle, authors, publisher, publisherDate, infoLink, 
//     description, pageCount, printedPageCount, categories, image, 

Book_proto.propTypes = {
    addBook: PropTypes.func.isRequired,
    bookId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    authors: PropTypes.array,
    publisher: PropTypes.string,
    publisherDate: PropTypes.string,
    infoLink: PropTypes.string,
    description: PropTypes.string,
    pageCount: PropTypes.number,
    printedPageCount: PropTypes.number,
    categories: PropTypes.array,
    image: PropTypes.string,

    removeButton: PropTypes.bool.isRequired,
}

// const mapStateToProps = state => ({
//     queryString: state.books.bookSearchQuery,
// })

const Book = connect(null, { addBook, })(Book_proto)
export { Book }
