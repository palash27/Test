import React, { Component } from 'react'

function Item(props) {
    return (
        <div className="input-group">
            <input type="checkbox" />
            <p>{props.task}</p>
            <hr />
        </div>
    )
}


export default Item