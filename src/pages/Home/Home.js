import { Container } from "./styles";
import { RoundedButton } from "../Login/styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Container>
        <h1>Emily e Victor</h1>
        <RoundedButton>
          <Link to="/rifa">
            <b>PARTICIPE DA RIFA</b>
          </Link>
        </RoundedButton>
      </Container>
    </>
  );
}
