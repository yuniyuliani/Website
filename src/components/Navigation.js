import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "./images/logo.png";
import { useNavigate } from "react-router-dom";



const Navigation = () => {
  const navigate = useNavigate();

  return (
  
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={Image}
                width="250"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">

                <Nav.Link href="#Beranda">
                  Beranda <i className="ri-home-3-line"></i>
                </Nav.Link>

                <NavDropdown title="Tentang" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Produk" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#Publikasi">Publikasi</Nav.Link>

                <Nav.Link href="#artikel">Artikel</Nav.Link>

                <NavDropdown title="Informasi" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link onClick={() => navigate("/Kontak")} >
                  Kontak
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
   
  );
};

export default Navigation;