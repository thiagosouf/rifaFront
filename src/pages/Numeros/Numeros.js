import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/papel.jpg";
import api from "../../api";
import UserContext from "../../contexts/UserContext";

export default function Numeros() {
  const { userToken } = useContext(UserContext);
  const [numeros, setNumeros] = useState([]);

  // let numeros = [
  //   { numero: 1, status: "Disponíveis" },
  //   { numero: 2, status: "Pago" },
  //   { numero: 3, status: "Disponíveis" },
  //   { numero: 4, status: "reservado" },
  // ];

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

                {/* {codigo ? (
                    <GreenCheck>{numero.numero}</GreenCheck>
                  ) : (
                    <Green>{numero.numero}</Green>
                  )}
                </Item> */}
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
                  {/* <Yellow>{numero.numero}</Yellow> */}
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
              console.log("deu ruim");
              console.log("err");
            });
          // props.reservas.push(parseInt(props.id))
          // props.lugaresReservados.push(`Assento ${props.lugar}`)
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
            console.log("deu ruim");
            console.log("err");
          });
        // props.reservas.push(parseInt(props.id))
        // props.lugaresReservados.push(`Assento ${props.lugar}`)
      }}
    >
      {props.numero}
    </GreenCheck>
  );
}

const BG = styled.div`
  z-index: -1;
  position: fixed;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

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
  /* background-color: blue; */
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

const GreenCheck = styled.div`
  padding: 1rem;
  width: 15px;
  height: 100%;
  background-color: yellow;
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

const Yellow = styled.div`
  padding: 1rem;
  width: 15px;
  height: 100%;
  border-radius: 15px;
  background-color: yellow;
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
