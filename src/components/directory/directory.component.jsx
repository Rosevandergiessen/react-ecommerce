import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'books',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg',
    route: 'shop/books'
  },
  {
    id: 2,
    title: 'music',
    imageUrl: 'https://source.unsplash.com/W8BRzoUTHNA',
    route: 'shop/music'
  },
  {
    id: 3,
    title: 'gaming',
    imageUrl: 'https://image.coolblue.nl/max/2048x1536/products/1696771',
    route: 'shop/gaming'
  },
  {
    id: 4,
    title: 'travel',
    imageUrl: 'https://source.unsplash.com/o4mP43oPGHk',
    route: 'shop/travel'
  },
  {
    id: 5,
    title: 'technology',
    imageUrl: 'https://source.unsplash.com/FBNxmwEVpAc',
    route: 'shop/technology'
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
