import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import Alldata from './alldata';
import { UserProvider } from './context';

function App() {
    return (
        <>
            {/* Background Video */}
            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src="/background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Bank Name Centered on Video */}
                
            </div>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <img
                            src="/bank.png"  
                            alt="Bank Logo"
                            className="bank-logo"
                            height={50}
                        />
                        <span className="ms-2">YOURS BANK</span>
                    </Navbar.Brand>

                    <Nav className="ms-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#register">REGISTER</Nav.Link>
                        <Nav.Link href="#deposit">DEPOSIT</Nav.Link>
                        <Nav.Link href="#cashback">CASHBACK</Nav.Link>
                        <Nav.Link href="#alldata">ALL-DATA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Routes */}
            <HashRouter>
                <UserProvider>
                    <div className="content">
                        <Routes>
                            <Route path='/register' element={<Register />} />
                            <Route path='/deposit' element={<Deposit />} />
                            <Route path='/cashback' element={<Cashback />} />
                            <Route path='/alldata' element={<Alldata />} />
                        </Routes>
                    </div>
                </UserProvider>
            </HashRouter>
        </>
    );
}

export default App;
