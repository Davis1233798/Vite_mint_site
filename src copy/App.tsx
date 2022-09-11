import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Erc721 from '../pages/Erc721';
import Erc1155 from '../pages/Erc1155';

export function App() {
  return (
    <>
      <Navbar />
      <Container paddingY='10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/erc721' element={<Erc721 />} />
          <Route path='/erc1155' element={<Erc1155 />} />
        </Routes>
      </Container>
    </>
  );
}
