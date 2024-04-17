"use client"

import React from 'react';
import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

  return (
    <footer className="footer">

              <div className="footer-column">
                <div className="logo">
                  {/* <img src={homeicon1} alt="Logo" /> Your logo image and logline */}
                  
                  <p>English Exam Practice</p>
                </div>
              </div>
              <div className="footer-column">
                <div className="menu-column">
                  <h3 className="menu-title">Practice</h3>
                  <Navbar>
                    <Container>
                        <Navbar.Brand as={Link} href="/">
                            English Exam Exercises
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="main-navbar" />
                        <Navbar.Collapse id="main-navbar">
                            <Nav className="mr-auto">
                                <NavDropdown title="Exam-Exercises" id="grammar-dropdown">
                                    <NavDropdown.Item as={Link} href="/Grammar-Exercises" active={pathname === "/Grammar-Exercises"}>Grammar</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/Reading-Exercises" active={pathname === "/Reading-Exercises"}>Reading</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/Writing-Exercises" active={pathname === "/Writing-Exercises"}>Writing</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/Listening-Exercises" active={pathname === "/Listening-Exercises"}>Listening</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/Speaking-Exercises" active={pathname === "/Speaking-Exercises"}>Speaking</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/Vocabulary-Exercises" active={pathname === "/Vocabulary-Exercises"}>Vocabulary</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} href="/Reading-Exercises" active={pathname === "/Reading-Exercises"}>For Teachers</Nav.Link>
                                <Nav.Link as={Link} href="/Writing-Exercises" active={pathname === "/Writing-Exercises"}>Live Online Speaking Practice</Nav.Link>
                                <Nav.Link as={Link} href="/Listening-Exercises" active={pathname === "/Listening-Exercises"}>About the Exams</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
              </div>
              <hr />
              <div className="footer-column">
                <div className="menu-column">
                  <h3 className="menu-title">Info</h3>
                  <ul>
                    <li>Menu 2 Item 1</li>
                    <li>Menu 2 Item 2</li>
                    <li>Menu 2 Item 3</li>
                  </ul>
                </div>
              </div>
              <div className="footer-column">
              <div className="menu-column">
                <h3 className="menu-title">Contact</h3>
              </div></div>
              <div className="footer-column">
                {/* Button */}
                <button>Find out about our live online speaking practice!</button>
              </div>
              
    </footer>
  );
};

export default Footer;


