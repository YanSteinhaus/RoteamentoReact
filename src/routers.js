import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Nutricionismo from './pages/Nutricionismo';
import JoginhoDaVelha from './pages/JogoDaVelha'; 
import Erro from './pages/Erro';
import Filmes from './pages/Filme';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />    
                <Route path="/Nutricionismo" element={<Nutricionismo />} />
                <Route path="/Filme" element={<Filmes />} />
                <Route path="/jogoDaVelha" element={<JoginhoDaVelha />} /> 
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp; 
