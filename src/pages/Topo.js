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
        <li>
          <input
            type="text"
            name="search"
            placeholder="Search anything here .."
          />
        </li>
      </ul>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 3.75rem;
  background-color: #fff;
  position: fixed;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: auto;
  }

  li {
    margin-left: 1rem;
  }
`;
