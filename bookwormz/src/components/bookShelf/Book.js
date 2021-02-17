import React from 'react'
import { BookCover, } from './Books.comp'
import { truncate } from '../../helpers/truncate'


export const Book = props => {
    
    const { title, subtitle, authors, publisher, publisherDate, 
        description, pageCount, printedPageCount, categories, image } = props

    console.log(image)    


    return (
        <BookCover>

            <img src={`${image}`} alt='book-cover' className='cover' />
            <div className='right-cell'>
                <p className='title'>{truncate(title)}</p>
                <p className='subtitle'>{subtitle}</p>
                <p className='author'>{authors}</p>
            </div>
            {/* <div style={{ background: '#4455ff' }} />
            <div style={{ background: '#ff5544' }} /> */}
            
        </BookCover>
    )
}
