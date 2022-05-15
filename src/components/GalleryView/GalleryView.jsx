import { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, ItemImg, ItemName, Button, Wrapper } from './GalleryView.styled';

export default function GalleryView({ item, items }) {
  const [disabled, setDisabled] = useState(false);
  const { id, title, image, price } = item;

  const keyEntity = 'entity';

  const addToLocalStorage = id => {
    const arrayFindItems =
      JSON.parse(localStorage.getItem(keyEntity)) === null
        ? []
        : JSON.parse(localStorage.getItem(keyEntity));

    const itemId = items?.find(arr => {
      return arr.id === id;
    });

    arrayFindItems.push(itemId);
    localStorage.setItem(keyEntity, JSON.stringify(arrayFindItems));

    const getItemFromLS = JSON.parse(localStorage.getItem(keyEntity));

    const findItemId = getItemFromLS.find(arr => {
      return arr.id === id;
    });

    if (findItemId.id === id) {
      setDisabled(true);
    }
  };

  return (
    <Item>
      <ItemImg src={image} alt={title} width="300" />
      <Wrapper>
        <ItemName>{title}</ItemName>
        <ItemName>
          <strong>{price}</strong>
        </ItemName>
        <Button
          type="button"
          disabled={disabled}
          onClick={() => addToLocalStorage(id)}
        >
          Add to card
        </Button>
      </Wrapper>
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
