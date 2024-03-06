import React from 'react';
import TextField from "@mui/material/TextField";
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Login</h2>
                <form>
                    <div className="form-row">
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                    </div>
                    <div className="form-row">
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                    </div>
                    <button type="submit">Login</button>
                    <p>Don't have an account? <Link to="/auth/register">Register</Link></p>
                </form>
            </div>
        </>
    );
};

export default Login;
