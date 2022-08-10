import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Rifa from "./pages/Rifa";

import Login from "./pages/Login/Login";
import Topo from "./pages/Topo";
import Cadastro from "./pages/Cadastro/Cadastro";
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
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
