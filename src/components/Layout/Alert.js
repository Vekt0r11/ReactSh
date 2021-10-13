import React from 'react'

function Alert(props) {

    const {msg} = props

    return (
        <div class="alert alert-danger" role="alert">
            {msg}
        </div>
    )
}

export default Alert
