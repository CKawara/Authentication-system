import React from 'react'
import { Link } from 'react-router-dom';
import{connect} from 'react-redux'
import {logout} from '../actions/auth'



const Home = ({logout, isAuthenticated}) => {
    return (
        <div className='container'>
        <div className='bg-dark bg-gradient p-2 text-white bg-opacity-80'>
            <h1 className='display-4'>Welcome to Auth System!</h1>
            <p className='lead'>This is an incredible authentication system with production level features!</p>
            <hr className='my-4' />
            {
           isAuthenticated ?
           <a className='btn btn-primary btn-lg' href='#'  onClick={logout} role='button'>Log Out </a>:
            <Link className='btn btn-primary btn-lg' to='/login' role='button'>Get Started</Link>
            }            
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {logout})(Home);