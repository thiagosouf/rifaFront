import styled from "styled-components";
import { Link } from "react-router-dom";

import img from "../../assets/img/background.jpg";

export default function Home() {
  return (
    <>
      <Container>
        <h1>Emily e Victor</h1>
        <button>
          <Link to="/rifa">
            <b>Participe da Rifa</b>
          </Link>
        </button>
      </Container>
    </>
  );
}

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
    /* margin-bottom: 5%; */
  }
  b {
    font-size: 1rem;
  }
`;