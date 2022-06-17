import styled from "styled-components";

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
`

const CardPerson = styled.div`
text-align: center;
  color: white;
  padding: 20px;
  width: 60%;
  background-color: #040509;
  border-radius: 30px;
  border: solid 1px green;

  h2{
    text-align: center;
  }

  span{
    margin-left: 30px;
  }
`


export { CardsContainer, CardPerson }