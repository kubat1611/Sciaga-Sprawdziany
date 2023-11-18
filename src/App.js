import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import main_page from "./images/main_page.jpg";

const Home = () => (
  <div className="flex flex-col items-center">
    <img src={main_page} alt='biology' className="m-auto" />
  </div>
);

const Topic = ({ title, subtopics }) => (
  <div>
    <h2>{title}</h2>
    <Accordion defaultActiveKey="0">
      {subtopics.map((subtopic, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{subtopic.title}</Accordion.Header>
          <Accordion.Body>
            {subtopic.notes.map((note) => (
              <p key={note.id}>{note.content}</p>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
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
  const [backendData, setBackendData] = useState({ topics: [] });

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

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
            {backendData.topics.map((topic, index) => (
              <Nav.Item key={index}>
                <Nav.Link as={NavLink} to={`/${topic.title.replace(/\s+/g, '-').toLowerCase()}`}>
                  {topic.title}
                </Nav.Link>
              </Nav.Item>
            ))}
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
            {backendData.topics.map((topic, index) => (
              <Route
                key={index}
                path={`/${topic.title.replace(/\s+/g, '-').toLowerCase()}`}
                element={<Topic title={topic.title} subtopics={topic.subtopics} />}
              />
            ))}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
