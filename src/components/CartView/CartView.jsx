import { useEffect, useState } from 'react';
import {
  DreamList,
  Item,
  ItemImg,
  ItemName,
  Button,
  Wrapper,
  Title,
} from './CartView.styled';

const keyEntity = 'entity';

export default function CartView() {
  const [itemsCart, setItemsCart] = useState([]);

  useEffect(() => {
    const findItemsInLocalStorage = JSON.parse(localStorage.getItem(keyEntity));

    setItemsCart(findItemsInLocalStorage);
  }, [setItemsCart]);

  const delateForLocalStorage = id => {
    const findItemsInLocalStorage = JSON.parse(localStorage.getItem(keyEntity));
    const deleteObj = findItemsInLocalStorage.find(item => item.id === id);
    const index = findItemsInLocalStorage.indexOf(deleteObj);
    if (index > -1) {
      findItemsInLocalStorage.splice(index, 1);
    }
    localStorage.setItem(keyEntity, JSON.stringify(findItemsInLocalStorage));
    const removeFromCart = JSON.parse(localStorage.getItem(keyEntity));
    setItemsCart(removeFromCart);
  };

  return (
    <>
      <Title>This is your gallery</Title>
      <DreamList>
        {itemsCart.map(({ id, image, title, price }) => (
          <Item key={id}>
            <ItemImg src={image} alt={title} width="300" />
            <Wrapper>
              <ItemName>{title}</ItemName>
              <ItemName>
                <strong>{price}</strong>
              </ItemName>
              <Button type="button" onClick={() => delateForLocalStorage(id)}>
                Delete
              </Button>
            </Wrapper>
          </Item>
        ))}
      </DreamList>
    </>
  );
}
