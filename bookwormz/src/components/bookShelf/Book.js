import React, { Fragment, useState, } from 'react'
import { BookCover, ModalShade, } from './Books.comp'
import { truncate } from '../../helpers/truncate'


export const Book = props => {
    const { title, subtitle, authors, publisher, publisherDate, 
        description, pageCount, printedPageCount, categories, image } = props   

    const [isModalToggled, setIsModalToggled] = useState(false)
    //const [scrollHeight, setScrollHeight] = useState(0)
 

    const toggleModal = () => {
        // console.log(isModalToggled)
        // console.log(document.body.scrollHeight)
        // setScrollHeight(document.body.scrollHeight)
        setIsModalToggled(!isModalToggled)
    }


    return (
        <Fragment>
            <ModalShade 
                onClick={toggleModal}
                // shadeHeight={scrollHeight}
                showModalShade={isModalToggled} />
            {/*  */}
            <BookCover onClick={toggleModal}>
                <img src={`${image}`} alt='book-cover' className='cover' />
                <div className='right-cell'>
                    <p className='title'>{truncate(title)}</p>
                    
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
            </BookCover>
        </Fragment>
        
    )
}
