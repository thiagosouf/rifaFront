import styled from "styled-components";
import { useState } from "react";

export default function Numeros() {
  const [codigo, setCodigo] = useState(0);
  let numeros = [
    { numero: 1, status: "disponivel" },
    { numero: 2, status: "vendido" },
    { numero: 3, status: "disponivel" },
    { numero: 4, status: "reservado" },
    { numero: 5, status: "disponivel" },
    { numero: 6, status: "disponivel" },
    { numero: 7, status: "vendido" },
    { numero: 8, status: "disponivel" },
    { numero: 9, status: "reservado" },
    { numero: 10, status: "disponivel" },
    { numero: 11, status: "disponivel" },
    { numero: 12, status: "vendido" },
    { numero: 13, status: "disponivel" },
    { numero: 14, status: "reservado" },
    { numero: 15, status: "disponivel" },
    { numero: 16, status: "disponivel" },
    { numero: 17, status: "vendido" },
    { numero: 18, status: "disponivel" },
    { numero: 19, status: "reservado" },
    { numero: 20, status: "disponivel" },
    { numero: 21, status: "disponivel" },
    { numero: 22, status: "vendido" },
    { numero: 23, status: "disponivel" },
    { numero: 24, status: "reservado" },
    { numero: 25, status: "disponivel" },
    { numero: 26, status: "disponivel" },
    { numero: 27, status: "vendido" },
    { numero: 28, status: "disponivel" },
    { numero: 29, status: "reservado" },
    { numero: 30, status: "disponivel" },
    { numero: 31, status: "disponivel" },
    { numero: 32, status: "vendido" },
    { numero: 33, status: "disponivel" },
    { numero: 34, status: "reservado" },
    { numero: 35, status: "disponivel" },
    { numero: 36, status: "disponivel" },
    { numero: 37, status: "vendido" },
    { numero: 38, status: "disponivel" },
    { numero: 39, status: "reservado" },
    { numero: 40, status: "disponivel" },
    { numero: 41, status: "disponivel" },
    { numero: 42, status: "vendido" },
    { numero: 43, status: "disponivel" },
    { numero: 44, status: "reservado" },
    { numero: 45, status: "disponivel" },
    { numero: 46, status: "disponivel" },
    { numero: 47, status: "vendido" },
    { numero: 48, status: "disponivel" },
    { numero: 49, status: "reservado" },
    { numero: 50, status: "disponivel" },
  ];
  return (
    <>
      <Topo>
        <h1>Escolha seus numeros da sorte:</h1>
      </Topo>
      <Principal>
        <Container>
          {numeros.map((numero) =>
            numero.status === "disponivel" ? (
              <>
                <Item key={numero.numero} onClick={() => setCodigo(1)}>
                  <Green>{numero.numero}</Green>
                </Item>
              </>
            ) : numero.status === "vendido" ? (
              <>
                <Item key={numero.numero}>
                  <Red>{numero.numero}</Red>
                </Item>
              </>
            ) : (
              <>
                <Item key={numero.numero}>
                  <Gray>{numero.numero}</Gray>
                </Item>
              </>
            )
          )}
        </Container>
      </Principal>
    </>
  );
}

const Topo = styled.div`
  text-align: center;
  padding-top: 5rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
`;

const Principal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: blue;
  border-radius: 15px;
  /* padding: 1rem; */
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  background-color: #f8f8f8;
  border-radius: 15px;
  padding: 1rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  margin: 0.05rem;
  /* background-color: green; */
  /* border-radius: 15px; */
  /* width: 15px;
  height: 100%; */
`;
const Green = styled.div`
  padding: 1rem;
  width: 15px;
  height: 100%;
  background-color: green;
  border-radius: 15px;
`;

const Gray = styled.div`
  padding: 1rem;
  width: 15px;
  height: 100%;
  background-color: gray;
  border-radius: 15px;
`;

const Red = styled.div`
  padding: 1rem;
  width: 15px;
  height: 100%;
  border-radius: 15px;
  background-color: red;
`;
