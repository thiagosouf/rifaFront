import styled from "styled-components";
import tv1 from "../../assets/img/tv1.jpg";
import img from "../../assets/img/papel.jpg";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Rifa() {
  const { userToken } = useContext(UserContext);
  console.log(userToken);
  return (
    <Container>
      <BG>
        <img src={`${img}`} alt={"imagem_casamento"}></img>
      </BG>
      <Topo>
        <h1>Será Sorteado:</h1>
      </Topo>
      <Principal>
        <ContainerPremio>
          <Premio>
            <h1>SmartTV LG 43" UHD</h1>
            <h2>SORTEIO SERÁ REALIZADO PELA LOTERIA FEDERAL</h2>
            <Item>
              <img src={`${tv1}`} alt={"imagem_da_tv"}></img>
            </Item>
          </Premio>
        </ContainerPremio>
        <Info>
          <Premio>
            <Premiotitulo>Premio</Premiotitulo>
            <Premioitens>
              <br></br>
              <b>1ª Ganhador(a):</b>
              <h1>SmartTV LG 43" UHD</h1>
              <br></br>
              <p>VALOR: R$ 10,00</p>
            </Premioitens>
          </Premio>
          <Valor>
            <Link to="/numeros">COMPRAR RIFA</Link>
          </Valor>
        </Info>
      </Principal>
      <Regras>
        <Premio>
          <Premiotitulo>Regras:</Premiotitulo>
          <br />
          <br />
          <Premioitens>
            <b>
              O ganhador será definido com base nos 3 ultimos números do 1º
              prêmio da Loteria Federal de 17/12/2022.
            </b>
            <br />
            <br />
            <b>
              EXEMPLO: Se o número sorteado pela Loteria Federal for{" "}
              <strong>048336</strong>.
            </b>
            <br />
            <b>
              O vencedor da rifa será o que tiver escolhido o numero{" "}
              <strong>336</strong>
            </b>
            <br />
            <br />
            <b>
              O sorteio será realizado na data informada pelo organizador caso a
              meta de 100% de bilhetes pagos seja alcançada. Caso a meta não
              seja alcançada, a data do sorteio será alterada automaticamente
              para o sorteio seguinte da Loteria Federal.
            </b>
            <br />
            <br />
            <b>
              O organizador entregará os prêmios em até 10 dias após a
              realização do sorteio.
            </b>
          </Premioitens>
        </Premio>
      </Regras>
    </Container>
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

const ContainerPremio = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  /* background-color: black; */
  padding: 1rem;
  border-radius: 10px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
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
  /* height: 288px; */
  padding: 15px;
`;

const Regras = styled.div`
  font-size: 0.9rem;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin: 10px;
  /* height: 288px; */
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

  /* h1 {
    padding-top: 80px;
  } */
`;

const Item = styled.div`
  display: flex;
  border-radius: 10px;
  img {
    height: 10rem;
  }
`;
