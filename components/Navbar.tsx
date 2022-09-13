import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Image } from "react-bootstrap";


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                 <Image
                        style={{ borderRadius: '500px' }}
                        src={`https://opensea.mypinata.cloud/ipfs/QmfPC9jKTBUuqybsvExPswhx42hbL9QwFtqczKS6S9nBx7`}
                        width={50}
                        height={50}
                    />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: 'auto' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Tokens" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/20">Erc20</NavDropdown.Item>
                            <NavDropdown.Item href="/677">Erc677</NavDropdown.Item>
                            {/*<NavDropdown.Divider />
                             <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item> */}
                        </NavDropdown>
                      <NavDropdown title="Nfts" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/721">Erc721</NavDropdown.Item>
                            <NavDropdown.Item href="/721A">Erc721A</NavDropdown.Item>
                            <NavDropdown.Item href="/721R">Erc721R</NavDropdown.Item>
                            <NavDropdown.Item href="/721Z">Erc721Z</NavDropdown.Item>
                            <NavDropdown.Divider />
                             <NavDropdown.Item href="/Erc1155">Erc1155</NavDropdown.Item> 
                        </NavDropdown>
                    </Nav>
                    <ConnectButton />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;