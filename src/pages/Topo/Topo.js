import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Navbar = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 20px; */
  height: 3.75rem;
  background-color: green;
  position: fixed;
  opacity: 1;

  a {
    padding-left: 20px;
  }

  ul {
    display: flex;
    list-style: none;
    /* padding-right: 20px; */
  }

  li {
    margin-right: 1rem;
  }
`;

// color: #d2691e;
