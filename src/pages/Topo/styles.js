import styled from "styled-components";

const Navbar = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 20px; */
  height: 3.75rem;
  background-color: #fb8c00;
  color: white;
  position: fixed;
  opacity: 1;
  font-family: "Amatic SC", cursive;
  font-size: 1.5rem;

  a {
    padding-left: 20px;
  }

  ul {
    display: flex;
    list-style: none;
    color: white;
    /* padding-right: 20px; */
  }

  li {
    margin-right: 1rem;
  }
`;

// color: #d2691e;
export { Navbar };
