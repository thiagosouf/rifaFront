import styled from "styled-components";
import img from "../../assets/img/background.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  justify-content: space-evenly;
  background-color: #87cefa;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 100vh;

  h1 {
    font-size: 3rem;
    color: #d2691e;
  }
  b {
    font-size: 1rem;
  }
`;

export { Container };
