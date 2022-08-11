import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";

import Topo from "./pages/Topo";
import Login from "./pages/Login/Login";
import Rifa from "./pages/Rifa/Rifa";
import Cadastro from "./pages/Cadastro/Cadastro";
import Numeros from "./pages/Numeros/Numeros";

import UserContext from "./contexts/UserContext";

export default function App() {
  // const [codigo, setCodigo] = useState("");
  const [userToken, setUserToken] = useState({ token: "" });
  return (
    <UserContext.Provider value={{ userToken, setUserToken }}>
      <BrowserRouter>
        <Topo />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rifa" element={<Rifa />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/numeros" element={<Numeros />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
