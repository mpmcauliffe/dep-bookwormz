import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useParams, } from 'react-router-dom'
import { ClubBookShelf, } from '../bookShelf/Books.comp'
import { AppButton, } from '../../components'
import { addBookToClub } from '../../redux/actions/bookActions'


const ClubBookItem_proto = ({ addBookToClub, 
    book, isUserBookshelf, }) => {
    
    const { clubId } = useParams()
    const { bookId, title, infoLink, image, authors } = book
    

    const bookItem = (
        <ClubBookShelf showAddButton={isUserBookshelf}>
            <img src={`${image}`} alt='cover' className='cover' />
            <div>
                <p className='title'><strong>{title}</strong></p>
                <section>
                    <p>{authors.map(author => <span key={author}>{author}&nbsp;&nbsp;&nbsp;</span>)}</p>
                    
                    <div style={{ display: 'inline-block' }}>
                        {isUserBookshelf 
                            && <AppButton
                            name={bookId}
                            title={title}
                            alertButton={false}
                            onClick={() => addBookToClub(clubId, book)}
                            style={{ marginRight: '1rem', float: 'right' }}>
                                Add</AppButton>}
                    </div>
                </section> 
            </div>
        </ClubBookShelf>
    )

    if (isUserBookshelf) { return bookItem }
    
    return (
        <a href={`${infoLink}`}>
            {bookItem}
        </a>    
    )
}

ClubBookItem_proto.propTypes = {
    addBookToClub: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    isUserBookshelf: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    addBookToClub: state.books.addBookToClub,
})

const ClubBookItem = connect(mapStateToProps, { addBookToClub, })(ClubBookItem_proto)
export { ClubBookItem }
