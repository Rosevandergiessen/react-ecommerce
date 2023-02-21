import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'fashion',
    imageUrl: 'http://source.unsplash.com/1PesBDwJz7g',
    route: 'shop/fashion'
  },
  {
    id: 2,
    title: 'music',
    imageUrl: 'https://source.unsplash.com/W8BRzoUTHNA',
    route: 'shop/toys'
  },
  {
    id: 3,
    title: 'technology',
    imageUrl: 'https://source.unsplash.com/Xd2FSvcRr8',
    route: 'shop/snacks'
  },
  {
    id: 4,
    title: 'gaming',
    imageUrl: 'https://source.unsplash.com/jtPSdmlEOjk',
    route: 'shop/venus'
  },
  {
    id: 5,
    title: 'travel',
    imageUrl: 'https://source.unsplash.com/miKmVyq3qhE',
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
