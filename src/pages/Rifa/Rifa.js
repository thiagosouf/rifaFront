import tv1 from "../../assets/img/tv1.jpg";
import img from "../../assets/img/papel.jpg";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import Button from "@mui/material/Button";
import {
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
} from "./styles";
import { BG, Topo, Principal } from "../Checkout/styles";

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
              <b>1ª Ganhador(a):</b>
              <h1>SmartTV LG 43" UHD</h1>
              <br></br>
              <p>VALOR: R$ 10,00</p>
            </Premioitens>
          </Premio>
          <Valor>
            <Link to="/numeros">
              <Button size="large" variant="contained" color="warning">
                PARTICIPE DA RIFA
              </Button>
            </Link>
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
