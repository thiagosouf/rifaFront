import * as React from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import { RoundedButton } from "../Login/styles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <Container>
        <h1>Emily e Victor</h1>
        <Link to="/rifa" style={{ textDecoration: "none" }}>
          <Button size="large" variant="contained" color="warning">
            PARTICIPE DA RIFA
          </Button>
        </Link>
      </Container>
    </>
  );
}
