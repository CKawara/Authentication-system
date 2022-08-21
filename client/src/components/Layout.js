import React, {useEffect} from 'react'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {CheckAuthenticated, load_user, googleAuthenticate} from '../actions/auth'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'


const Layout = (props) => {
    let location = useLocation()
    useEffect(() => {
        // grab url and put it in a key value format
        const values = queryString.parse(location.search)
        const state = values.state ? values.state: null
        const code = values.code ? values.code : null
        
        console.log('state' + state);
        console.log('code' + code);

        if(state && code){
            props.googleAuthenticate(state, code)
        } else{
            props.CheckAuthenticated()
            props.load_user()
        }
    }, [location])

    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default connect(null, {CheckAuthenticated, load_user, googleAuthenticate})(Layout)
