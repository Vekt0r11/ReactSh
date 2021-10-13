import React from 'react'

const Banner = (props) => {

    console.log(props)

    const { msg } = props 
    
    return (
        <div>
            <h1>{msg}</h1>
        </div>
    )
}

export default Banner
