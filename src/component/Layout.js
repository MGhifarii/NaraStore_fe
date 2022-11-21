import React from 'react'
import Header from '../component/Header'


const LayoutTempat = ({children}) => {
    return (
        <div className=''>
            <Header />
                {children}
        </div>
    )
}

export default LayoutTempat