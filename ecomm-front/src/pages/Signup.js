import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import Footer from '../components/Footer/Footer'

//axios
import { signUp } from '../axios/config.axios';

//Context
import ProfileContext from '../context/Profile/ProfileContext';

const Signup = () => {
    const { addProfile, isThereAuth } = useContext(ProfileContext);
    const history = useHistory();

    const [values, setValues] = useState({
        email: '',
        userName: '',
        password: ''
    });

    const [validations, setValidations] = useState({
        email: '',
        userName: '',
        password: ''
    });

    const validateAll = () => {
        let isValid = true;
        return isValid;
    };

    const validateOne = (e) => {
        const { name } = e.target;
        const value = values[name];
        let msgIssue = '';

        if (!value) {
            msgIssue = `${name} is necessary`;
        }

        if ( value && name === 'email' && (!/\S+@\S+\.\S+/.test(value)) ) {
            msgIssue = 'Email debe ser como hello@mail.com';
        };

        setValidations( {...validations, [name]: msgIssue} );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues( {...values, [name]: value} );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateAll();
        if (!isValid) return false;

        try {
            const response = await signUp(values);
            const {token, id} = response.data;
            const DATA = {
                id,
                userName,
                email,
                roles: ['ROLE_USER']
            };
            localStorage.setItem('Token', token);
            addProfile(DATA);
            isThereAuth();
            history.push('/');
        } catch (error) {
            const { status, data } = error.response;
            if (status === 409) {
                alert(data.message);
            } else {
                alert(status, data.message);
            };
        };
    };

    const { email, userName, password } = values;

    return (
        <>
            <div className="section is-large">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-title is-primary">
                        Sign Up
                        <span className="form-title-icon">
                            {/* <BiLockAlt /> */}
                        </span>
                    </div>
                    <div className="form-body">
                    <div className="form-item">
                            <label className="form-label">
                                Username
                            </label>
                            <input className="form-input" type="text" name="userName" value={userName} onChange={handleChange} onBlur={validateOne} placeholder="user"></input>
                        </div>
                        <div className="form-item">
                            <label className="form-label">
                                E-mail address
                            </label>
                            <input className="form-input" type="email" name="email" value={email} onChange={handleChange} onBlur={validateOne} placeholder="@hello.com"></input>
                        </div>
                        <div className="form-item">
                            <label className="form-label">
                                Password
                            </label>
                            <input className="form-input" type="password" name="password" value={password} onChange={handleChange} onBlur={validateOne} placeholder="*********"></input>
                        </div>
                        <div className="form-item">
                            <button className="form-button is-primary" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Signup
