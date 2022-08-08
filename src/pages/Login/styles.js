import styled from "styled-components";

const BG = styled.div`
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
  opacity: 0.6;
`;

const AuthSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthForm = styled.form`
  margin-top: 20%;
  padding: 20px;
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

export default {
  BG,
  AuthSection,
  AuthForm,
  FormLabel,
  FormInput,
  RoundedButton,
};
