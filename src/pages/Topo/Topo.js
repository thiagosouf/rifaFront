import { Link } from "react-router-dom";
import { Navbar } from "./styles";

export default function Topo() {
  return (
    <Navbar>
      <Link to={"/"}>PAGINA INICIAL</Link>
      <ul>
        <li>
          <Link to={"/login"}>LOGIN</Link>
        </li>
        <li>
          <Link to={"/cadastro"}>CRIAR CONTA</Link>
        </li>
      </ul>
    </Navbar>
  );
}
