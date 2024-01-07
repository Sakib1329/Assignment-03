import React from 'react'

function ListTitle(props) {
    return (
        <h2 className={"border-b pb-2 font-medium " + props.color}>{props.innerText}</h2>
    )
}

export default ListTitle