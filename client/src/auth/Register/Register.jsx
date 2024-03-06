import React from 'react';
import "./Register.css";
import TextField from "@mui/material/TextField";
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Register</h2>
                <form>
                    <div className="form-row">
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                        />
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
                        <TextField
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                    </div>
                    <div className="form-row">
                        <TextField
                            id="standard-number"
                            label="Age"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-number"
                            label="Height (cm)"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-number"
                            label="Weight (kg)"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                    </div>
                    <div className="form-row">
                        <TextField
                            id="standard-select-gender"
                            select
                            label="Gender"
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                        >
                            <option value="select" hidden>--Select--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </TextField>
                        <TextField
                            id="date"
                            label="Date of Birth"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                    </div>
                    <div className="form-row">
                        <TextField
                            id="standard-select-goal"
                            select
                            label="Goal"
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                        >
                            <option value="select" hidden>--Select--</option>
                            <option value="lose">Lose</option>
                            <option value="maintain">Maintain</option>
                            <option value="gain">Gain</option>
                        </TextField>
                    </div>
                    <button type="submit">Register</button>
                    <p>Already have an account? <Link to="/auth/login">Login</Link></p>
                </form>
            </div>
        </>
    );
};

export default Register;
