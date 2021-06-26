import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
background-color: ${(props) => props.theme.backgroundColor};
color:            ${(props) => props.theme.mainColor};
}
`;

export const ListWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export const MovieWrapper = styled.div`
  margin: auto;
  width: fit-content;
  padding: 20px;
  border: 3px solid whitesmoke;

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

  margin-left: 50px;
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
    text-align: justify;
    border: 1px solid yellow;
    padding: 5px;
  }
  button {
    background-color: #a5a5a5;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 8px;
  }
  .button4 {
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
  }

  .button4:hover {
    background-color: #e7e7e7;
  }
`;
