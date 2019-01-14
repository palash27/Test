import React, { Component } from 'react'

function Cards(props) {
    return (
        <div className="row">
            <div style={{ margin: "auto", display: "block" }} className="col-sm-3">
                <div className="card">
                    <h3 className="card-header">{props.heading}</h3>
                    <div className="card-block">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.text}</p>
                        <a href="#" className="btn btn-primary" style={{ display: "block", margin: "auto" }} >{props.buttontext}</a>
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Cards

//style={{ margin: "auto", display: "block" }}