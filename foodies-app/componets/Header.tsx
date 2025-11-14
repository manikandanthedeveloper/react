"use client";

import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImg from '@/assets/logo.png';
import classes from './Header.module.css';
import { usePathname } from 'next/navigation';

function Header() {
    const path = usePathname();
    return (
        <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} href="/">
                    <Image src={logoImg} alt='A plate with food on it' className={classes.logo} priority />
                    Foodies App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/" className={path == '/' ? "active" : undefined}>Home</Nav.Link>
                        <Nav.Link as={Link} href="/meals" className={path.startsWith('/meals') ? "active" : undefined}>Meals</Nav.Link>
                        <Nav.Link as={Link} href="/community" className={path.startsWith('/community') ? "active" : undefined}>Foddies Community</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;