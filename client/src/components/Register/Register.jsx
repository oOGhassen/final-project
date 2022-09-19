import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { userRegister } from "../../redux/actions/actionUser";

const Register = () => {
    const { loading } = useSelector(state => state.userReducer)

    //state
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { fullName, email, password };
        dispatch(userRegister(newUser));
    }
    return (
        <div className="signUp_Form" >
            {
                loading ? <h1>Loading...</h1> : (localStorage.getItem("token")) ? (
                    <Navigate to="/register" />
                ) : (<Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" >
                        {/* <Form.Label>Full Name</Form.Label> */}
                        <Form.Control type="text" placeholder="Full name" value={fullName} onChange={e => setFullName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>

                    <Link to="/signin"> <Button variant="secondary">Login</Button> </Link>
                    <Button variant="primary" type="submit"> Sign Up </Button>

                </Form>)
            }
        </div>
    )
}

export default Register