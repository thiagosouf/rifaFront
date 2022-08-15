import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/papel.jpg";
import api from "../../api";
import UserContext from "../../contexts/UserContext";

export default function Checkout() {
  const { userToken } = useContext(UserContext);
  const [numeros, setNumeros] = useState([]);
  const [usuarioData, setUsuarioData] = useState([]);

  function getNumeros() {
    const promise = api.get("/rifa/checkout", {
      headers: {
        Authorization: `${userToken.token}`,
      },
    });
    promise
      .then((response) => {
        console.log(response.data);
        setNumeros(response.data.pegarEscolhidos);
        setUsuarioData(response.data.dadosUsuario);
        console.log("ok");
      })
      .catch((err) => {
        console.log("deu ruim");
        console.log(err);
      });
  }
  useEffect(getNumeros, []);

  return (
    <>
      <BG>
        <img src={`${img}`} alt={"imagem_fundo"}></img>
      </BG>
      <Topo>
        <h1>Seus numeros Selecionados:</h1>
      </Topo>
      <Principal>
        <Container>
          {numeros.map((numero) => (
            <>
              <Item key={numero.numero}>
                <Yellow>{numero.numero}</Yellow>
              </Item>
            </>
          ))}
        </Container>
      </Principal>
      <Rodapé>
        <ConfirmButton>
          {console.log(numeros.length)}
          {console.log(numeros)}
          {console.log(usuarioData)}
          {numeros.length <= 0 ? (
            <>
              <Link to="/rifa">PARTICIPE DA RIFA</Link>
            </>
          ) : (
            <Botao
              onClick={() => {
                const num = [];
                for (let i = 0; i < numeros.length; i++) {
                  num.push(`Numero: ${numeros[i].numero}`);
                }
                const mensagem = ` Olá, Gostaria de comprar os seguintes numeros, ${num}. Meus dados cadastrados são, NOme: ${usuarioData[0]} , Email: ${usuarioData[1]} , Whatsapp: ${usuarioData[2]}`;
                window.open(
                  "https://wa.me/+5521920187161?text=" +
                    encodeURIComponent(mensagem)
                );
              }}
            >
              CONFIRMAR
            </Botao>
          )}
        </ConfirmButton>
      </Rodapé>
    </>
  );
}

const BG = styled.div`
  z-index: -1;
  position: fixed;
  img {
    height: 100vh;
    width: 99vw;
  }
`;

const Topo = styled.div`
  padding-top: 5rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
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
  /* height: 100%; */
  border-radius: 15px;
  background-color: yellow;
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
  width: 290px;
  height: 45px;
  background: rgba(152, 251, 152, 0.3);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: medium;
`;

const Botao = styled.button`
  border-radius: 5px;
`;
