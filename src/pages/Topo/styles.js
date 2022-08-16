import styled from "styled-components";

const Navbar = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 20px; */
  height: 3.75rem;
  background-color: green;
  color: #f0f2b6;
  position: fixed;
  opacity: 1;

  a {
    padding-left: 20px;
  }

  ul {
    display: flex;
    list-style: none;
    color: #f0f2b6;
    /* padding-right: 20px; */
  }

  li {
    margin-right: 1rem;
  }
`;

// color: #d2691e;
export { Navbar };
