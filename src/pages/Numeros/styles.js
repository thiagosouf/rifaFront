import styled from "styled-components";

const Principal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 15px;
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
  display: flex;
  flex-direction: column;
  margin: 0.05rem;
`;
const Green = styled.div`
  padding: 1rem;
  width: 15px;
  height: 100%;
  background-color: gray;
  border-radius: 15px;
`;

const GreenCheck = styled.div`
  padding: 1rem;
  width: 15px;
  height: 100%;
  background-color: #f4c703;
  border-radius: 15px;
`;

const Gray = styled.div`
  padding: 1rem;
  width: 15px;
  height: 100%;
  background-color: green;
  border-radius: 15px;
`;

const Red = styled.div`
  padding: 1rem;
  width: 15px;
  height: 100%;
  border-radius: 15px;
  background-color: red;
`;

export { Principal, Container, Item, Green, GreenCheck, Gray, Red };
