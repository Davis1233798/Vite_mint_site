import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Erc20 from '../pages/Erc20';
import Erc677 from '../pages/Erc677';
import Erc721 from '../pages/Erc721';
import Erc721A from '../pages/Erc721A';
import Erc721R from '../pages/Erc721R';
import Erc1155 from '../pages/Erc1155';

export function App() {
  return (
    <>
      <Navbar />
      <Container paddingY='10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/20' element={<Erc20 />} />
          <Route path='/677' element={<Erc677 />} />
          <Route path='/721' element={<Erc721 />} />
          <Route path='/721A' element={<Erc721A />} />
          <Route path='/721R' element={<Erc721R />} />
          <Route path='/1155' element={<Erc1155 />} />         
        </Routes>
      </Container>
    </>
  );
}
