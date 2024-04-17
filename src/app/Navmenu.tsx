"use client"

import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function Navmenu() {
    const pathname = usePathname();
    
    return (
        <Navbar sticky="top" expand="lg" collapseOnSelect>
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
                            <NavDropdown.Item as={Link} href="/Index-of-Exercises" active={pathname === "/Index-of-Exercises"}>All Exercises</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href="/Reading-Exercises" active={pathname === "/Reading-Exercises"}>For Teachers</Nav.Link>
                        <Nav.Link as={Link} href="/Writing-Exercises" active={pathname === "/Writing-Exercises"}>Live Online Speaking Practice</Nav.Link>
                        <Nav.Link as={Link} href="/Listening-Exercises" active={pathname === "/Listening-Exercises"}>About the Exams</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
