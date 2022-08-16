import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/papel.jpg";
import api from "../../api";
import UserContext from "../../contexts/UserContext";
import {
  BG,
  Topo,
  Principal,
  Container,
  Item,
  Yellow,
  Rodapé,
  ConfirmButton,
  Botao,
} from "./styles";

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
                  num.push(`Numero: ${numeros[i].numero} `);
                }
                const mensagem = ` Olá, Gostaria de comprar os seguintes numeros \n ${num}.\n\n Meus dados cadastrados são, Nome: ${
                  usuarioData[0]
                } , Email: ${usuarioData[1]} , Whatsapp: ${
                  usuarioData[2]
                }\n\n Valor R$ ${numeros.length * 10},00`;
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
