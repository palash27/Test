import React, { Component } from 'react'
import AnimatedInput from '../buddy-component/input-animated';

function Navbar(props) {
    return (
        <form class="grid-flex">
            <div class="column w-50">
                <AnimatedInput label="First Name" type="text" id="first-name" name="first-name" required />
            </div>
            <div class="column w-50">
                <div class="input-animated">
                    <label for="last-name">Last name</label>
                    <input type="text" id="last-name" name="last-name" required />
                </div>
            </div>
        </form>
    )
}

export default Navbar
