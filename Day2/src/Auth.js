import React, { useState } from 'react';
import Home from './Home';
import './Auth.css';

function Auth() {
    const [logstatus, setLogStatus] = useState(true);
    const [log, setLog] = useState(false);

    const handleLoginClick = () => {
        setLog(true);
    };

    const handleRegisterClick = () => {
        setLogStatus(false);
    };

    const handleSignupClick = () => {
        setLogStatus(true);
    };

    const Login = () => {
        if (log === false) {
            return (
                <>
                    <div className='logf1'>
                        <form>
                            <h1>PLEASE LOGIN TO CONTINUE</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>EMAIL</td>
                                        <td><input type='email' name='email' id='email' placeholder='enter your emailid' /></td>
                                    </tr>
                                    <tr>
                                        <td>PASSWORD</td>
                                        <td><input type='password' name='password' id='password' placeholder='enter your password' /></td>
                                    </tr>
                                    <tr>
                                        <td><button type='button' onClick={handleLoginClick}>Login</button></td>
                                    
                                        <td><button type='button' onClick={handleRegisterClick}>Register</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </>
            );
        } else {
            return <Home />;
        }
    };

    const Register = () => {
        return (
            <>
            <div className='outer'>
                <div className='logf1'>
                    <form>
                        <h1>PLEASE REGISTER TO CONTINUE</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <td>NAME</td>
                                    <td><input type='text' name='name' id='name' placeholder='enter your name' /></td>
                                </tr>
                                <tr>
                                    <td>EMAIL</td>
                                    <td><input type='email' name='email' id='email' placeholder='enter your emailid' /></td>
                                </tr>
                                <tr>
                                    <td>PASSWORD</td>
                                    <td><input type='password' name='password' id='password' placeholder='enter your password' /></td>
                                </tr>
                                <tr>
                                    <td>AGE</td>
                                    <td><input type='number' name='age' id='age' placeholder='enter your age' /></td>
                                </tr>
                                <tr>
                                    <td><button type='button' onClick={handleSignupClick}>Sign up</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form></div>
                </div>
            </>
        );
    };

    return (
        <>
            {logstatus ? <Login /> : <Register />}
        </>
    );
}

export default Auth;