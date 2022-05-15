import ApiService from 'service/api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import GalleryView from '../components/GalleryView/GalleryView';
import SearchForm from 'components/SearchForm/SearchForm';
import { Container, Title, DreamList, ContainerError } from './styled';
import { Footer } from 'components/Footer/Footer';
import { Filter } from 'components/Filter/Filter';

const newApi = new ApiService();

export function GalleryPage() {
  const [items, setItems] = useState(null);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const keyEntity = 'entity';

  useEffect(() => {
    setLoading(true);
    newApi
      .fetchItems()
      .then(result => {
        const itemsInLocalStorage =
          JSON.parse(localStorage.getItem(keyEntity)) === null
            ? []
            : JSON.parse(localStorage.getItem(keyEntity));

        const findSameItems = result.filter(
          item =>
            !itemsInLocalStorage.some(
              itemForRemove => itemForRemove.id === item.id
            )
        );

        setItems(findSameItems);
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
  }, [setItems]);

  const searchValueOnList = event => {
    setFilter(event.target.value);
  };

  const getVisibleItems = () => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(normalizeFilter)
    );
  };

  const sortHightLowPrice = () => {
    const sortHightLow = [...items].sort((a, b) => b.price - a.price);
    setItems(sortHightLow);
  };

  const sortLowHightPrice = () => {
    const sortLowHight = [...items].sort((a, b) => a.price - b.price);
    setItems(sortLowHight);
  };

  return (
    <>
      <Container>
        <Title>Our gallery. Enjoy!</Title>
        {loading && <Loader />}
        <SearchForm value={filter} searchName={searchValueOnList} />
        <Filter
          sortHightLowPrice={sortHightLowPrice}
          sortLowHightPrice={sortLowHightPrice}
        />
        <DreamList>
          {items &&
            getVisibleItems().map(item => (
              <GalleryView key={item.id} item={item} items={items} />
            ))}
        </DreamList>
      </Container>
      {!loading && error && (
        <ContainerError>
          Sorry, there was an error, please try again
        </ContainerError>
      )}
      {items && <Footer />}
    </>
  );
}
