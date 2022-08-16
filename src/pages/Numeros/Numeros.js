import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/papel.jpg";
import api from "../../api";
import UserContext from "../../contexts/UserContext";
import {
  Principal,
  Container,
  Item,
  Green,
  GreenCheck,
  Gray,
  Red,
} from "./styles";
import { BG, Topo, Rodapé, ConfirmButton } from "../Checkout/styles";

export default function Numeros() {
  const { userToken } = useContext(UserContext);
  const [numeros, setNumeros] = useState([]);

  function getNumeros() {
    const promise = api.get("/rifa");
    promise
      .then((response) => {
        setNumeros(response.data);
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
        <h1>Escolha seus numeros da sorte:</h1>
      </Topo>
      <Principal>
        <Container>
          {numeros.map((numero) =>
            numero.status === "Disponíveis" ? (
              <>
                <Item key={numero.numero}>
                  <Bolinha numero={numero.numero} status={numero.status} />
                </Item>
              </>
            ) : numero.status === "Pago" ? (
              <>
                <Item key={numero.numero}>
                  <Red>{numero.numero}</Red>
                </Item>
              </>
            ) : numero.status === "Selecionado" ? (
              <>
                <Item key={numero.numero}>
                  <Bolinha numero={numero.numero} status={numero.status} />
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
      <Rodapé>
        <ConfirmButton>
          <Link to="/checkout">CONFIRMAR</Link>
        </ConfirmButton>
      </Rodapé>
    </>
  );
}

function Bolinha(props) {
  const { userToken } = useContext(UserContext);
  const [selecionado, setSelecionado] = useState(props.status);
  console.log(props.numero);
  console.log(props.status);
  return selecionado === "Disponíveis" ? (
    <>
      <Green
        onClick={() => {
          const promise = api.put(
            "/rifa",
            {
              numero: props.numero,
            },
            {
              headers: {
                Authorization: `${userToken.token}`,
              },
            }
          );
          promise
            .then((response) => {
              console.log("ok");
              setSelecionado("Selecionado");
            })
            .catch((err) => {
              alert("Voce Precisa estar logado para selecionar um numero!");
              console.log("deu ruim");
              console.log("err");
            });
        }}
      >
        {props.numero}
      </Green>
    </>
  ) : (
    <GreenCheck
      onClick={() => {
        const promise = api.put(
          "/rifa/unselect",
          {
            numero: props.numero,
          },
          {
            headers: {
              Authorization: `${userToken.token}`,
            },
          }
        );
        promise
          .then((response) => {
            console.log("ok");
            setSelecionado("Disponíveis");
          })
          .catch((err) => {
            alert("Esse numero já foi selecionado por outro usuario");
            console.log("deu ruim");
            console.log("err");
          });
      }}
    >
      {props.numero}
    </GreenCheck>
  );
}
