'use client'

import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Link href="#" passHref>
          <Navbar.Brand>Navbar Offcanvas</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="#action1" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="#action2" passHref>
                <Nav.Link>Link</Nav.Link>
              </Link>
              <NavDropdown
                title="Dropdown"
                id="offcanvasNavbarDropdown-expand"
              >
                <Link href="#action3" passHref>
                  <NavDropdown.Item>Action</NavDropdown.Item>
                </Link>
                <Link href="#action4" passHref>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="#action5" passHref>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
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
  )
}
