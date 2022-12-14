import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';
// import axios from 'axios';

const ConfirmReset = ({ reset_password_confirm}) => {
    
    const {uid} = useParams()
    const {token} = useParams()
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true)
    };

    if (requestSent) {
        return <Navigate to='/' />
        
    }

    return (
        <div className='container mt-5 px-3 py-3'>
            <h1>Request Password Reset</h1>
            <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                <input
                    className='form-control mt-3'
                    type='password'
                    placeholder='New Password'
                    name='new_password'
                    value={new_password}
                    onChange={e => onChange(e)}
                    minLength='6'
                    required
                />
            </div>
            <div className='form-group'>
                <input
                    className='form-control mt-3'
                    type='password'
                    placeholder='Confirm New Password'
                    name='re_new_password'
                    value={re_new_password}
                    onChange={e => onChange(e)}
                    minLength='6'
                    required
                />
            </div>
            <button className='btn btn-primary mt-3' type='submit'>Reset Password</button>
            </form>

        </div>
    );
};


export default connect(null, { reset_password_confirm })(ConfirmReset);