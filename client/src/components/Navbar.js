import React from 'react'
import { Link } from 'react-router-dom'
import{connect} from 'react-redux'
import {logout} from '../actions/auth'

const Navbar = ({logout, isAuthenticated}) => {
    const guest =()=>(
        <>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/signup">Signup</Link>
        </>
    )

    const authenticated=()=>(
        <a className="nav-link" href="#!" onClick={logout}>Logout</a>
    )

    return (
        <nav className="navbar navbar-expand-lg bg-light mb-5 shadow-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Auth-App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        {isAuthenticated ? authenticated() : guest()}
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout})(Navbar)
