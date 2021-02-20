import React, { Fragment, useState, } from 'react'
import { BookCover, } from './Books.comp'
import { truncate } from '../../helpers/truncate'


export const Book = props => {
    const { title, subtitle, authors, publisher, publisherDate, infoLink,
        description, pageCount, printedPageCount, categories, image } = props   

    const [isBookOpen, setIsBookOpen] = useState(false)
    //const [scrollHeight, setScrollHeight] = useState(0)
 

    const OpenBook = () => {
        setIsBookOpen(!isBookOpen)
    }


    return (
        <Fragment>
            {/*<ModalShade 
                onClick={toggleModal}
                // shadeHeight={scrollHeight}
                showModalShade={isModalToggled} />
            <BookModal 
                onClick={toggleModal}
                showModal={isModalToggled}></BookModal>
              */}
            <BookCover onClick={OpenBook} isBookOpen={isBookOpen}>
                <img src={`${image}`} alt='book-cover' className='cover' />
                <div className='right-cell'>
                    <p className='title'><strong>{truncate(title)}</strong></p>
                    
                    <p className='subtitle'><em>{truncate(subtitle, 55)}</em></p>
                    <div>
                        {Array.isArray(authors) 
                            && authors.map((author, i) => {
                                return i < 3 
                                    ? <span 
                                        key={`${author}_${i}`}
                                        className='author'>
                                        {truncate(author, 25)}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    : i === 3
                                        ? <span
                                            key='author' 
                                            className='author'>...</span>
                                        : null
                                })}
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
