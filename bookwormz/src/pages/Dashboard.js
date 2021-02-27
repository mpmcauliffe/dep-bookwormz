import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { getBooks, } from '../redux/actions/bookActions'
import { pageTransition, pageVariants, } from './zAnimation'
import { MyBookShelf, HeaderSection, MainContent, } from '../components'


export const Dashboard_proto = ({ getBooks, myBooks, isLoading, bookMessage, }) => {

    useEffect(() => { getBooks() }, [])

    return (
        <motion.div
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
            
            <MainContent>
                <HeaderSection>
                    <h1>Dashboard</h1>
                </HeaderSection>
                {/* <div style={{ height: '60rem', width: '100%', backgroundColor: '#dfdf22' }} /> */}
                <h3>My Books</h3>
                <MyBookShelf />
            </MainContent>
            
        </motion.div>
        
    )
}


Dashboard_proto.propTypes = {
    myBooks: PropTypes.array.isRequired,
    // getBooks: PropTypes.func.isRequired,
    // isLoading: PropTypes.bool.isRequired,
    bookMessage: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    // bookSearchQuery: state.books.bookSearchQuery,
    myBooks: state.books.myBooks,
    // getBooks: state.books.getBooks,
    // isLoading: state.books.isLoading,
    bookMessage: state.books.bookMessage,
})

const Dashboard = connect(mapStateToProps, { getBooks })(Dashboard_proto)
export { Dashboard }
