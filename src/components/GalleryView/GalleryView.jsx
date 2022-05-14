import { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, ItemImg, ItemName } from './GalleryView.styled';

export default function GalleryView({ item, items }) {
  // const arrayEnt = JSON.parse(localStorage.getItem(keyEntity));

  const [disabled, setDisabled] = useState(false);
  const { id, title, image, price } = item;

  // const keyAll = 'card';
  const keyEntity = 'entity';

  const addToLocalStorage = id => {
    const arrayFindItems =
      JSON.parse(localStorage.getItem(keyEntity)) === null
        ? []
        : JSON.parse(localStorage.getItem(keyEntity));

    const itemId = items?.find(arr => {
      return arr.id === id;
    });

    // add Some items to LS
    arrayFindItems.push(itemId);
    localStorage.setItem(keyEntity, JSON.stringify(arrayFindItems));

    const getItem = localStorage.getItem(keyEntity);
    const findItem = JSON.parse(getItem);

    const findItemId = findItem.find(arr => {
      return arr.id === id;
    });

    if (findItemId.id === id) {
      setDisabled(true);
    }
  };

  return (
    <Item>
      <ItemImg src={image} alt={title} width="300" />
      <ItemName>{title}</ItemName>
      <ItemName>
        <strong>{price}</strong>
      </ItemName>
      <button
        type="button"
        disabled={disabled}
        onClick={() => addToLocalStorage(id)}
      >
        {' '}
        Add to card
      </button>
    </Item>
  );
}

GalleryView.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
};
