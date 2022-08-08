import styled from "styled-components";
import tv1 from "../assets/img/tv1.jpg";
import img from "../assets/img/casamento21.jpg";

export default function Rifa() {
  return (
    <Container>
      <BG>
        <img src={`${img}`} alt={"imagem_da_tv"}></img>
      </BG>
      <Topo>
        <h1>Será Sorteado:</h1>
      </Topo>
      <Principal>
        <Premio>
          <h1>SmartTV LG 43" UHD</h1>
          <h2>SORTEIO SERÁ REALIZADO PELA LOTERIA FEDERAL</h2>
          <Item>
            <img src={`${tv1}`} alt={"imagem_da_tv"}></img>
          </Item>
        </Premio>
        <Info>
          <Valor>
            <h1>Valor</h1>
            <h2>R$ 20</h2>
            <h3>,00</h3>
          </Valor>
          <Premio>
            <Premiotitulo>Premio</Premiotitulo>
            <Premioitens>
              <b>1ª Ganhador(a):</b>
              <h1>SmartTV LG 43" UHD</h1>
            </Premioitens>
          </Premio>
          <Valor>
            <b>Escolher Número</b>
          </Valor>
        </Info>
      </Principal>
    </Container>
  );
}

const BG = styled.div`
  z-index: -1;
  position: absolute;
  img {
    height: 100vh;
    width: 99vw;
  }
`;

const Topo = styled.div`
  padding-top: 5rem;
  font-size: 6rem;
  display: flex;
  justify-content: center;
`;

const Principal = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
`;

const Premio = styled.div`
  padding: 3rem;
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
  height: 288px;
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
  height: 90vh;
  background-color: rgba(192, 225, 237, 0.5);
  height: 100vh;

  /* h1 {
    padding-top: 80px;
  } */
`;

const Item = styled.div`
  display: flex;
  border-radius: 10px;
  img {
    height: 30rem;
  }
`;
