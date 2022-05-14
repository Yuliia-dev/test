import { useEffect, useState } from 'react';
import { DreamList, Item, ItemImg, ItemName } from './CartView.styled';

const keyEntity = 'entity';

export default function CartView() {
  const [itemsCard, setItemsCard] = useState([]);

  useEffect(() => {
    const findItems = localStorage.getItem(keyEntity);
    const parseData = JSON.parse(findItems);
    setItemsCard(parseData);
  }, [setItemsCard]);

  const delateForLocalStorage = id => {
    const findItemsForDelete = JSON.parse(localStorage.getItem(keyEntity));
    const deleteObj = findItemsForDelete.find(item => item.id === id);
    const index = findItemsForDelete.indexOf(deleteObj);
    if (index > -1) {
      findItemsForDelete.splice(index, 1);
    }
    localStorage.setItem(keyEntity, JSON.stringify(findItemsForDelete));
    const removeFromCart = JSON.parse(localStorage.getItem(keyEntity));
    setItemsCard(removeFromCart);
  };

  return (
    <>
      <h1>This your gallery</h1>
      <DreamList>
        {itemsCard?.map(({ id, image, title, price }) => (
          <Item key={id}>
            <ItemImg src={image} alt={title} width="300" />
            <ItemName>{title}</ItemName>
            <ItemName>
              <strong>{price}</strong>
            </ItemName>
            <button type="button" onClick={() => delateForLocalStorage(id)}>
              Delete
            </button>
          </Item>
        ))}
      </DreamList>
    </>
  );
}
