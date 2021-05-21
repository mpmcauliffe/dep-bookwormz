import { text } from 'body-parser'
import React, { Fragment, } from 'react'


export const MakeComment = () => {
    return (
        <Fragment>
            <section className='top-bar'>
                <div className='dummy-image' />

                <div className='identity'>
                    <div />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='name'>Your Name Here</p>
                        <p className='content'>Today's Date Here</p>
                    </div>
                </div>
            </section>

            <section className='input-bar'>
                <div>
                    <i className='fas fa-pen-alt fa-3x' />
                    <input />
                </div>
                <textarea className='input-area' />
            </section>
        </Fragment>
    )
}
