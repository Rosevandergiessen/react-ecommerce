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
    title: 'toys',
    imageUrl: 'https://source.unsplash.com/FTbRYPERsqc',
    route: 'shop/toys'
  },
  {
    id: 3,
    title: 'snacks',
    imageUrl: 'https://source.unsplash.com/w6elADh_jww',
    route: 'shop/snacks'
  },
  {
    id: 4,
    title: 'care',
    imageUrl: 'https://source.unsplash.com/l0Gq4BmboYY',
    route: 'shop/venus'
  },
  {
    id: 5,
    title: 'travel',
    imageUrl: 'https://source.unsplash.com/oBCT3obZ6OY',
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
