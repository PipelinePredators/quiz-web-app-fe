import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage(props) {
    return (
        <div>
            <Link to="/admin">
                <div>
                    <h1 className='text-white'>Welcome to Home page</h1>
                </div>
            </Link>
        </div>
    )
}

export default LandingPage