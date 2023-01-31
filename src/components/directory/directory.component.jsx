import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'fashion',
    imageUrl: 'http://source.unsplash.com/qy0BHykaq0E',
    route: 'shop/fashion'
  },
  {
    id: 2,
    title: 'earth',
    imageUrl: 'https://source.unsplash.com/ggeXPf_ykAU',
    route: 'shop/earth'
  },
  {
    id: 3,
    title: 'mars',
    imageUrl: 'https://source.unsplash.com/mDPMZYyQuIQ',
    route: 'shop/mars'
  },
  {
    id: 4,
    title: 'venus',
    imageUrl: 'https://source.unsplash.com/XClNDg9Z9Ag',
    route: 'shop/venus'
  },
  {
    id: 5,
    title: 'pluto',
    imageUrl: 'https://source.unsplash.com/FB2yVV42jD0',
    route: 'shop/pluto'
  }
]

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category = {category}/>
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
