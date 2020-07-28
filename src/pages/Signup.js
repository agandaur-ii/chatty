import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        Sign Up To
                        <Link to="/">Chatty</Link>
                    </h1>
                    <p></p>
                </form>
            </div>
        )
    }
}