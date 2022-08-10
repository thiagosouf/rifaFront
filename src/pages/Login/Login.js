import styled from "styled-components";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

import img from "../../assets/img/background.jpg";
import api from "../../api";
import UserContext from "../../contexts/UserContext";

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

const BG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #87cefa;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 100vh;
  opacity: 0.6;
  z-index: -9;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #87cefa;
`;

const AuthSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #d2691e;
  background-color: #d2691e;
  border-radius: 15px;
  z-index: 999;
  position: absolute;
  top: 25vh;
  align-content: center;
`;

const AuthForm = styled.form`
  margin-top: 20%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :disabled {
    background: #ccc;
  }
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 250px;
  height: 15px;
  border-radius: 5px;
  border: 1px #d4d4d4 solid;
  padding: 20px;
  font-size: large;
`;

const RoundedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 45px;
  background: rgba(31, 94, 238, 1);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: medium;
`;

const Cadastrar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;
