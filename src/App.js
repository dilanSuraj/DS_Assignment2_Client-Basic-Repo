import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

import TicketList from './components/view-tickets.component';
// import PaymentList from './components/view-payments.component';
import UpdatePayment from './components/edit-payment.component';
import AddTicket from './components/add-payment.component';

function App() {
    return (
        <Router>
            <div className='container-fluid'>
                <h1>Book Your Train Now!!</h1>
                <br/>
                
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    
                    <Navbar.Brand href="/tickets">
                      <img src={logo} width='30' height='30' alt='Home'/>
                    </Navbar.Brand>
                    <Navbar.Brand href="/tickets">E-TrainBook</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="create">Create</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><b>SignUp</b></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <b>Login</b>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Route path="/tickets" exact component={TicketList} />
                {/* <Route path="/" exact component={PaymentList} /> */}
                <Route path="/edit/:id" component={UpdatePayment} />
                <Route path="/create" component={AddTicket} />
            </div>

        </Router>
    );
}

export default App;
