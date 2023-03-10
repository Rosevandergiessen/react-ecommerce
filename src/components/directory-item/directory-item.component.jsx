import { DirectoryItemContainer, BackgroundImage, Body } from "./directory-item.styles";

import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const {imageUrl, title, route} = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  }

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />
        <Body>
          <h2>{title}</h2>
        </Body>
      </DirectoryItemContainer>
  )
}


export default DirectoryItem;
