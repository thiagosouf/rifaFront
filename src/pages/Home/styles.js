import styled from "styled-components";
import img from "../../assets/img/background.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  background-color: #87cefa;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 100vh;
  text-align: center;

  h1 {
    font-family: "Great Vibes", cursive;
    font-size: 5rem;
    color: #d2691e;
  }
  b {
    font-size: 1rem;
  }
`;

export { Container };
