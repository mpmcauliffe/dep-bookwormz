import React, { useState, useEffect, useRef, } from 'react'
import { BookCover, } from './Books.comp'


export const Book = props => {
    const [imgHeight, setImgHeight] = useState(0)
    const [imgWidth, setImgWidth] = useState(0)
    const imgRef = useRef(null)
    
    const { title, subtitle, authors, publisher, publisherDate, 
        description, pageCount, printedPageCount, categories, image } = props

    //console.log(image)    

    const setImage = () => {
        console.log(imgRef.current.height)
        setImgHeight(imgRef.current.height)
        setImgWidth(imgRef.current.width)
        console.log(imgHeight, imgWidth)
    }

    useEffect(() => {
        if (imgRef !== null) {
            setImage()
        }

    }, [])


    return (
        <BookCover>

            <img ref={imgRef} src={`${image}`} alt='book-cover' className='cover' />
            <div>
                <p className='title'>{title}</p>
                <p className='subtitle'>{subtitle}</p>
                <p className='author'>{authors}</p>
            </div>
            {/* <div style={{ background: '#4455ff' }} />
            <div style={{ background: '#ff5544' }} /> */}
            
        </BookCover>
    )
}
