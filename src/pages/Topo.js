import styled from "styled-components";

export default function Topo() {
  return (
    <Navbar>
      <a href="/">LOGO</a>
      <ul>
        <li>
          <a href="/">LOGIN</a>
        </li>
        <li>
          <a href="/">CRIAR CONTA</a>
        </li>
      </ul>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  height: 3.75rem;
  background-color: #fff;
  position: fixed;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 3rem;
  }

  li {
    margin-left: 1rem;
  }
`;
