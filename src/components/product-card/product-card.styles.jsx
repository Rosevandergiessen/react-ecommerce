

import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
  }
  button {
    width: 80%;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      outline: 3px solid black;
    }
    button {
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  background-color: rgba(250,250,250, 0.5);

`;

export const Name = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 20%;
`;
