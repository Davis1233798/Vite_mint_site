
import {
    Navbar as NavbarBS,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap';
import { Image } from '@chakra-ui/react';
import { Routes, Route, Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Logo from "./Logo"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <>
            <NavbarBS>
                <Container>
                    <Image
                        style={{ borderRadius: '500px' }}
                        src={`https://opensea.mypinata.cloud/ipfs/QmfPC9jKTBUuqybsvExPswhx42hbL9QwFtqczKS6S9nBx7`}
                        width={50}
                        height={50}
                    />
                </Container>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav>
                            <Link to="/">Home</Link>
                        </Nav>
                        <Nav>
                            <Link to="/20">Tokens</Link></Nav>
                        <Nav>
                            <Link to="/721A">Liquidity Pools</Link></Nav>
                        <NavDropdown title="NFTs" id="basic-nav-dropdown">
                            <NavDropdown.Item title="ERC-1155 series" id="basic-nav-dropdown" >ERC-1155</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">ERC-721 A</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                ERC-721 R
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ERC-721 Z</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <ConnectButton />
                </NavbarBS.Collapse>
            </NavbarBS >
        </>
    )
}

export default Navbar