import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarTCategoria/DeletarCategoria';

function App() {
  return (
      <AuthProvider>
          <BrowserRouter>
              <Navbar />
              <div className='min-h-[80vh]'>
                  <Routes>
                      <Route path="/" element={<Login />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/categorias" element={<ListaCategorias/>} />
                      <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                      <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                      <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                      <Route path="/cadastro" element={<Cadastro />} />
                  </Routes>
              </div>
              <Footer />
          </BrowserRouter>
      </ AuthProvider>
      
  );
}

export default App;