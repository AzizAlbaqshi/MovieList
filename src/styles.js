import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
background-color: ${(props) => props.theme.backgroundColor};
color:            ${(props) => props.theme.mainColor};
}
`;

export const ListWrapper = styled.div`
  display: block;
  margin-left: 90px;
`;

export const MovieWrapper = styled.div`
  display: block;
  margin: 5px;
  padding: 5px;
  float: left;
  border: 3px solid whitesmoke;
  margin-left: 10px;

  img {
    width: 150px;
    height: 200px;
  }

  p {
    text-align: center;
  }
`;

export const ButtonTheme = styled.button`
  background-color: ${(props) => props.theme.mainColor};
  border: 3px;
  border-radius: 8px;
  color: ${(props) => props.theme.backgroundColor};
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const DetailWrapper = styled.div`
  margin-left: 10%;
  margin-right: auto;
  width: 60%;
  padding: 50px;
  img {
    width: 250px;
    height: 400px;
    float: left;
    margin-right: 20px;
  }

  p {
    display: flex;
    text-align: justify;

    margin: 10px;
  }

  h4 {
    display: flex;
    margin-top: 300px;
    text-align: justify;
    border: 1px solid yellow;
    padding: 5px;
  }
`;
