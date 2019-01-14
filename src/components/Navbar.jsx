import React, { Component } from 'react'

function Navbar(props) {
    return (
        <form class="grid-flex">
            <div class="column w-50">
                <div class="input-animaton">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required />
                </div>
            </div>
            <div class="column w-50">
                <div class="input-animation">
                    <label for="last-name">Last name</label>
                    <input type="text" id="last-name" name="last-name" required />
                </div>
            </div>
        </form>
    )
}

export default Navbar
