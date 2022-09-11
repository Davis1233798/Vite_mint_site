import React from 'react'
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
import { Flex } from '@chakra-ui/react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const myLoader = ({ }) => {
    return `https://opensea.mypinata.cloud/ipfs/QmfPC9jKTBUuqybsvExPswhx42hbL9QwFtqczKS6S9nBx7`;
}
const Navbar = () => {
    return (

        <NavbarBS className="bg-white shadow-sm mb-3">
            <Container>
                <Image
                    style={{ borderRadius: '500px' }}
                    loader={myLoader}
                    src={`https://opensea.mypinata.cloud/ipfs/QmfPC9jKTBUuqybsvExPswhx42hbL9QwFtqczKS6S9nBx7`}
                    alt="siteicon"
                    width={50}
                    height={50}
                />
            </Container>
            <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBS.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                    <Nav>
                        <Link to="/">Home</Link>
                    </Nav>
                    <Nav>
                        <Link to="/20">Tokens</Link></Nav>
                    <Nav>
                        <Link to="/721A">Liquidity Pools</Link></Nav>
                    <NavDropdown title="NFTs" id="basic-nav-dropdown">
                        <NavDropdown title="ERC-721 series" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ERC-721 A</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                ERC-721 R
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ERC-721 Z</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="ERC-1155 series" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>

                </Nav>
                <ConnectButton />
            </NavbarBS.Collapse>



        </NavbarBS>

    )
}

export default Navbar