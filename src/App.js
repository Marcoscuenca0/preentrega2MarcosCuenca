import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId/detalle/:productoId" element={<ItemDetailContainer />} />
      </Routes>
      <ItemCount />
    </Router>
  );
}

export default App;