import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { BookShelf, HeaderSection, MainContent, Searchbar, } from '../components'


export const Books_proto = ({ bookSearchQuery, }) => {

    return (
        <motion.div 
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
                <MainContent>
                    <HeaderSection>
                        <h1>Books</h1>
                        <Searchbar 
                            searchFor='books'
                            queryString={bookSearchQuery} />
                    </HeaderSection>
                    <BookShelf />
                    {/* <div style={{ height: '60rem', width: '100%', backgroundColor: '#982233' }} /> */}
                    
                </MainContent>
        </motion.div>        
    )
}


Books_proto.propTypes = {
    bookSearchQuery: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    bookSearchQuery: state.books.bookSearchQuery,
})

const Books = connect(mapStateToProps, {  })(Books_proto)
export { Books }
