import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import main_page from "./images/main_page.jpg"

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => (
  <div className="flex flex-col items-center">
    <img src={main_page} alt='biology' className="m-auto" />
  </div>
);



const MuscularSystem = () => (
  <div>
    <h2>Układ mięśniowy</h2>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Definicje</Accordion.Header>
        <Accordion.Body>
          info
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Rodzaje mięsni</Accordion.Header>
        <Accordion.Body>
          info
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
);

const SkeletalSystem = () => (
  <div>
    <h2>Układ kostny</h2>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Temat za tydzien</Accordion.Header>
        <Accordion.Body>
          tu pojawia sie informacje na sprawdzian na za tydzien
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Temat za tydzien</Accordion.Header>
        <Accordion.Body>
        tu pojawia sie informacje na sprawdzian na za tydzien
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
);

const NotFound = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>Oops! The page you are looking for does not exist.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className='App bg-gray-100 min-h-screen p-0 m-0'>
        <Navbar className="bg-primary text-white text-center">
          <Container className="d-flex justify-content-center">
            <Navbar.Brand className="text-4xl text-white">Ściąga biologia</Navbar.Brand>
          </Container>
        </Navbar>

        <div className="flex-grow flex items-center justify-center">
          <Nav variant="tabs" defaultActiveKey="" className="bg-light p-4 text-dark">
            <Nav.Item>
              <Nav.Link as={NavLink} to='/'>
                Strona główna
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/uklad-miesniowy">
                Układ mięśniowy
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/uklad-kostny'>
                Układ kostny
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/nastepny-temat' disabled>
                Jeszcze nie znam następnego tematu
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/uklad-miesniowy" element={<MuscularSystem />} />
            <Route path="/uklad-kostny" element={<SkeletalSystem />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
