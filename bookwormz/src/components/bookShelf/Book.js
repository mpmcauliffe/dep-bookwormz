import React from 'react'
import { BookCover, } from './Books.comp'
import { truncate } from '../../helpers/truncate'


export const Book = props => {
    
    const { title, subtitle, authors, publisher, publisherDate, 
        description, pageCount, printedPageCount, categories, image } = props   


    return (
        <BookCover>

            <img src={`${image}`} alt='book-cover' className='cover' />
            <div className='right-cell'>
                <p className='title'>{truncate(title)}</p>
                {/*<div />  */}
                <p className='subtitle'>{truncate(subtitle, 55)}</p>
                <div>
                    {Array.isArray(authors) 
                        && authors.map((author, i) => {
                            return i < 3 
                                ? <span 
                                    key={`${author}_${i}`}
                                    className='author'>{truncate(author, 25)}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                : i === 3
                                    ? <span
                                        key='author' 
                                        className='author'>...</span>
                                    : null
                            })
                    }
                </div>
                
            </div>
            {/* <div style={{ background: '#4455ff' }} />
            <div style={{ background: '#ff5544' }} /> */}
            
        </BookCover>
    )
}
