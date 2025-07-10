import { Home } from  '../Home/Home';
import React, { useState } from 'react';
import { Profile } from '../Profile/Profile';
import './Login.css';
import { Link } from 'react-router-dom';
export const Login=()=>{
     
    return(
        <>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Social App</h3>
                        <span className="loginDesc">Connect with friends and the world around you on Social App.</span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder='Email' className='loginInput'
                            
                           
                            
                            />
                            <input placeholder='Password' type='password' className='loginInput' />
                            <button className='loginButton'
                            
                            ><Link to="/Profile">Login </Link></button>
                            <span className='loginForgot'>Forgot Password?</span>
                          
                          
                            <button className='loginRegisterButton'
                            ><Link to="/Register">Create a New Account </Link></button>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}