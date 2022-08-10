import styled from "styled-components";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import img from "../../assets/img/background.jpg";
import api from "../../api";

export default function Login() {
  const [signinData, setSigninData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    senha: "",
    confirmSenha: "",
  });
  const [loading, setLoading] = useState(false);

  const redirectUser = useNavigate();

  function signup(event) {
    setLoading(true);
    event.preventDefault();
    const promise = api.post("/signup", {
      nome: signinData.nome,
      email: signinData.email,
      whatsapp: signinData.whatsapp,
      senha: signinData.senha,
      confirmSenha: signinData.confirmSenha,
    });
    promise
      .then((response) => {
        setLoading(false);
        redirectUser("/login");
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
      });
  }

  return (
    <>
      <BG></BG>
      <Container>
        <AuthSection>
          <AuthForm onSubmit={signup}>
            <FormLabel>
              <FormInput
                type="text"
                name="nome"
                placeholder="Nome"
                value={signinData.nome}
                onChange={(e) =>
                  setSigninData({
                    ...signinData,
                    nome: e.target.value,
                  })
                }
                required
                disabled={loading}
              />
            </FormLabel>
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
                type="text"
                name="whatsapp"
                placeholder="Whatsapp"
                value={signinData.whatsapp}
                onChange={(e) =>
                  setSigninData({
                    ...signinData,
                    whatsapp: e.target.value,
                  })
                }
                required
                disabled={loading}
              />
            </FormLabel>
            <FormLabel>
              <FormInput
                type="password"
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
            <FormLabel>
              <FormInput
                type="password"
                name="confirmSenha"
                placeholder="Confirmar Senha"
                value={signinData.confirmSenha}
                onChange={(e) =>
                  setSigninData({
                    ...signinData,
                    confirmSenha: e.target.value,
                  })
                }
                required
                disabled={loading}
              />
            </FormLabel>
            <FormLabel>
              <RoundedButton>
                {loading ? (
                  <>
                    <ThreeDots />
                    <span>Carregando...</span>
                  </>
                ) : (
                  <>
                    <span>Cadastrar</span>
                  </>
                )}
              </RoundedButton>
            </FormLabel>
          </AuthForm>
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

const FormLabel = styled.label`
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #87cefa;
`;
