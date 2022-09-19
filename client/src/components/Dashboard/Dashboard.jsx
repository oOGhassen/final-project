import React, { useEffect } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getProfil, userSignOut } from '../../redux/actions/actionUser';
import "./Dashboard.css";

const Dashboard = () => {
    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfil());
    }, [dispatch]);

    return (
        <div className='header'>

            <Navbar bg="light" variant="light" expand={false}>

                <Container fluid >
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Brand href="/">GameBox216</Navbar.Brand>

                    <div className="all_nave">

                        {user ? <div className="nave" >

                            <div className="signUp">
                                <Nav>
                                    <Nav.Link >{user.fullName} </Nav.Link>
                                </Nav>
                            </div>
                            <div className="login">
                                <Nav>
                                    <Nav.Link onClick={() => dispatch(userSignOut())} > Sign Out  </Nav.Link>
                                </Nav>
                            </div>
                        </div> : <div className="nave">
                            <div className="signUp">
                                <Nav>
                                    <Nav.Link href='/register'>Register</Nav.Link>
                                </Nav>
                            </div>

                            <div className="login">
                                <Nav>
                                    <Nav.Link href='/signin' >Sign in</Nav.Link>
                                </Nav>
                            </div>

                        </div>}

                       { user ?<Nav>
                            <div className='btnCartCount' >
                                <div className='count'>0</div>
                                <Nav.Link href='/cart' >
                                    <i className='fas fa-shopping-cart'></i>
                                </Nav.Link>
                            </div>
                        </Nav> : <Nav>
                            <div className='btnCartCount' >
                                <div className='count'>0</div>
                                <Nav.Link href='/signin' >
                                    <i className='fas fa-shopping-cart'></i>
                                </Nav.Link>
                            </div>
                        </Nav> }

                    </div>


                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">GameBox216</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/digital">Digital Product</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>

            </Navbar>

        </div >
    )
}

export default Dashboard