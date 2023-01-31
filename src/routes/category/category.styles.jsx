import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const TitleContainer = styled.div`
  margin: 0px;
`
export const GoBackLink = styled(Link)`
  font-size: 20px;
  color: gray;
`

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;
  margin-bottom: 0px;
`;
