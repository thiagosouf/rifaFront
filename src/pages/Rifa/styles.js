import styled from "styled-components";

const ContainerPremio = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 10px;
`;

const Premio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border-radius: 15px;
  padding: 1.5rem;

  h1 {
    color: #01579b;
    font-size: 3rem;
    margin-bottom: 0.9rem;
  }
  h2 {
    color: #01579b;
    font-size: 1rem;
    margin-bottom: 1.9rem;
  }
`;

const Info = styled.div`
  font-size: 1rem;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 15px;
`;

const Regras = styled.div`
  font-size: 0.9rem;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
`;

const Valor = styled.div`
  display: flex;
  height: 3rem;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0.5rem;
  }
`;

const Premiotitulo = styled.div`
  font-size: 1.5rem;
  color: #03a9f4;
  font-family: "Patrick Hand", cursive;
  margin-bottom: 0.5rem;
`;

const Premioitens = styled.div`
  h1 {
    font-size: 1.5rem;
    color: #03a9f4;
    font-family: "Patrick Hand", cursive;
  }
  b,
  p {
    font-size: 1.3rem;
    color: #01579b;
    font-family: "Patrick Hand", cursive;
  }
`;

const Comprar = styled.div`
  background-color: green;
  height: 3rem;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: rgba(255, 225, 237, 0.4);
  height: 100%;
  width: 100vw;
`;

const Item = styled.div`
  display: flex;
  border-radius: 10px;
  img {
    height: 10rem;
  }
`;

export {
  ContainerPremio,
  Premio,
  Info,
  Regras,
  Valor,
  Premiotitulo,
  Premioitens,
  Comprar,
  Container,
  Item,
};
