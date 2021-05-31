import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useParams, } from 'react-router-dom'
import { ClubBookShelf, } from '../../bookShelf/Books.comp'
import { AppButton, } from '../../../components'
import { addBookToClub, removeBookFromClub, } from '../../../redux/actions/bookActions'


const ClubBookItem_proto = ({ addBookToClub, removeBookFromClub,  
    book, isUserBookshelf, isCheifAdmin, }) => {
    
    const { clubId } = useParams()
    const { bookId, title, infoLink, image, authors } = book
    

    return (
        <ClubBookShelf showButton={isUserBookshelf || isCheifAdmin ? true : false}>
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
                            
                        {isCheifAdmin && !isUserBookshelf 
                            ? <AppButton
                            name={bookId}
                            title={title}
                            alertButton={true}
                            onClick={() => removeBookFromClub(clubId, book)}
                            style={{ marginRight: '1rem', float: 'right' }}>
                                Remove</AppButton>
                            : null }
                    </div>
                    {/*  */}
                </section> 
                {!isUserBookshelf
                    && <div className='link'>
                        <a href={`${infoLink}`}>
                            <p style={{ color: '#000' }}>view book on google</p>
                        </a>
                    </div>
                }
            </div>
        </ClubBookShelf>
    )

    // if (isUserBookshelf) { return bookItem }
    
    // return (
    //     <a href={`${infoLink}`}>
    //         {bookItem}
    //     </a>    
    // )
}

ClubBookItem_proto.propTypes = {
    addBookToClub: PropTypes.func.isRequired,
    removeBookFromClub: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    isUserBookshelf: PropTypes.bool.isRequired,
    isCheifAdmin: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    addBookToClub: state.books.addBookToClub,
    removeBookFromClub: state.books.removeBookFromClub,
    isCheifAdmin: state.clubs.isCheifAdmin,
})

const ClubBookItem = connect(mapStateToProps, { addBookToClub, removeBookFromClub, })(ClubBookItem_proto)
export { ClubBookItem }
