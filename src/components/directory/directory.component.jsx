import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://source.unsplash.com/LXspKUjsgH0',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'sound',
    imageUrl: 'https://source.unsplash.com/ggeXPf_ykAU',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://source.unsplash.com/mDPMZYyQuIQ',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'space',
    imageUrl: 'https://source.unsplash.com/XClNDg9Z9Ag',
    route: 'shop/womens'
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://source.unsplash.com/FB2yVV42jD0',
    route: 'shop/mens'
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
