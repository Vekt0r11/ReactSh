import React from 'react'

function Grid(props) {

    const {inCol1, inCol2, inCol3, alert} = props

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                {inCol1}
                </div>
                <div className="col-4">
                {inCol2}
                </div>
                <div className="col-4">
                {inCol3} 
                <br/>
                {alert}
                </div>
                
            </div>
        </div>
    )
}

export default Grid
