import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { userSignIn } from '../../redux/actions/actionUser';

const SignIn = () => {

    const { loading } = useSelector((state) => state.userReducer);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userSignIn({ email, password }));
    };

    return (
        <div className="signUp_Form" >
            {
                loading ? <h1>Loading...</h1> : localStorage.getItem("token") ? (
                    <Navigate to="/" />
                  ) : <Form   onSubmit={handleSubmit} >

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label> 
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label> 
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>

                    <Link to="/register"> <Button variant="secondary">Register</Button> </Link>
                    <Button variant="primary" type="submit"> Sign In </Button>

                </Form>
            }
        </div>
    )
}

export default SignIn