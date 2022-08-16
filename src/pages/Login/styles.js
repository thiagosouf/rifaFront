import styled from "styled-components";
import img from "../../assets/img/background.jpg";

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
  background: green;
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

export {
  BG,
  AuthSection,
  FormLabel,
  AuthForm,
  FormInput,
  RoundedButton,
  Cadastrar,
  Container,
};
