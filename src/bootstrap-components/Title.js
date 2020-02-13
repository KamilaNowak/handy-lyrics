import React from 'react'
function Title({title}){
    return (
    <div className="row">
        <div className="col-10 mx-auto my-3 text-center text-title">
            <h1 className="text-capitalize">
                {title}
            </h1>
        </div>
    </div>
    )
}
export default Title