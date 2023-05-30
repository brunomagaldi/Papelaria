import "./assets/styles/style.css"
import Home from "./home";
import Sobre from "./sobre";
import Contato from "./contato";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
    <Route path="/contato" element={<Contato/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
