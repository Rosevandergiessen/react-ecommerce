import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    line-height: 1rem;
    letter-spacing: 5px;
    font-size: 22px;
    color: white;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    color: white;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 300px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.2);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

  }
`;
