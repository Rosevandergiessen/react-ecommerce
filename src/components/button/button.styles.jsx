import styled from 'styled-components';


import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  &:hover:enabled {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &:disabled {
    background-color: #F0F0F0;
    color: white;
    opacity: 1;
}
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 2px solid black;
  &:hover:enabled {
    background-color: black;
    color: white;
    border: 2px solid white;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`
