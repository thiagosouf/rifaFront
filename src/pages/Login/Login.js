import styled from "styled-components";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

import api from "../../api";
import UserContext from "../../contexts/UserContext";
import {
  BG,
  AuthSection,
  AuthForm,
  FormLabel,
  FormInput,
  RoundedButton,
  Cadastrar,
  Container,
} from "./styles";

export default function Login() {
  const [signinData, setSigninData] = useState({ email: "", senha: "" });
  const [loading, setLoading] = useState(false);
  const { userToken, setUserToken } = useContext(UserContext);

  const redirectUser = useNavigate();

  function signin(event) {
    setLoading(true);
    event.preventDefault();
    const promise = api.post("/login", {
      email: signinData.email,
      senha: signinData.senha,
    });
    promise
      .then((response) => {
        setLoading(false);
        const { token } = response.data;
        console.log(UserContext);
        setUserToken({
          token: response.data,
        });
        console.log(token);
        console.log(userToken);
        console.log(response.data);
        redirectUser("/rifa", response.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
        setLoading(false);
      });
  }

  return (
    <>
      <BG></BG>
      <Container>
        <AuthSection>
          <AuthForm onSubmit={signin}>
            <FormLabel>
              <FormInput
                type="e-mail"
                name="e-mail"
                placeholder="E-mail"
                value={signinData.email}
                onChange={(e) =>
                  setSigninData({
                    ...signinData,
                    email: e.target.value,
                  })
                }
                required
                disabled={loading}
              />
            </FormLabel>
            <FormLabel>
              <FormInput
                type="senha"
                name="senha"
                placeholder="Senha"
                value={signinData.senha}
                onChange={(e) =>
                  setSigninData({
                    ...signinData,
                    senha: e.target.value,
                  })
                }
                required
                disabled={loading}
              />
            </FormLabel>
            <RoundedButton>
              {" "}
              {loading ? (
                <ThreeDots color="white" height={80} width={80} />
              ) : (
                "Log In"
              )}
            </RoundedButton>
          </AuthForm>
          <Cadastrar>
            <Link to="/cadastro">
              <b>
                Ainda nao tem uma conta? <a>Clique Aqui!</a>
              </b>
            </Link>
          </Cadastrar>
        </AuthSection>
      </Container>
    </>
  );
}
