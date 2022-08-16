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

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 1rem;
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
  background-color: green;
  height: 3rem;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0.5rem;
  }
`;

const Premiotitulo = styled.div``;

const Premioitens = styled.div`
  h1 {
    font-size: 1rem;
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
  width: 99vw;
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
