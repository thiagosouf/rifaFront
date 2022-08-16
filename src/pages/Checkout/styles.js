import styled from "styled-components";

const BG = styled.div`
  z-index: -1;
  position: fixed;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

const Topo = styled.div`
  padding-top: 5rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  h1 {
    color: #558b2f;
    font-family: "Amatic SC", cursive;
    text-align: center;
  }
`;

const Principal = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

const Container = styled.div`
  background-color: rgba(255, 225, 237, 0.4);
  height: 100%;
  width: 99vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  border-radius: 10px;
  img {
    height: 10rem;
  }
`;

const Yellow = styled.div`
  padding: 1rem;
  width: 15px;
  border-radius: 15px;
  background-color: #ffb300;
  margin: 10px;
`;

const Rodapé = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 4rem;
  background-color: green;
  color: white;
  position: fixed;
  bottom: 0;
`;

const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  font-size: medium;
`;

const Botao = styled.div`
  border-radius: 5px;
`;

export {
  BG,
  Topo,
  Principal,
  Container,
  Item,
  Yellow,
  Rodapé,
  ConfirmButton,
  Botao,
};
