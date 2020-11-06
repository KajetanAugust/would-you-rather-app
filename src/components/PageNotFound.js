import React, { Component } from "react";
import { Link } from 'react-router-dom'

class PageNotFound extends Component {

    render() {

        return (
            <div className='page-not-found'>
                <h2>Error 404</h2>
                <h3>Page not found</h3>

                <Link to='/'><button>Go home</button></Link>
            </div>
        );
    }
}

export default PageNotFound;