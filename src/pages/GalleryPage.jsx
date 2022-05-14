import ApiService from 'service/api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import GalleryView from '../components/GalleryView/GalleryView';
import SearchForm from 'components/SearchForm/SearchForm';
import { Container, Title, DreamList, ContainerError } from './styled';

const newApi = new ApiService();

export function GalleryPage() {
  const [items, setItem] = useState(null);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const keyEntity = 'entity';

  useEffect(() => {
    setLoading(true);
    newApi
      .fetchItems()
      .then(result => {
        // const findItemsForDelete = JSON.parse(localStorage.getItem(keyEntity)) === null ? [] : JSON.parse(localStorage.getItem(keyEntity));
        // const deleteObj = findItemsForDelete.find(item => item.id === id);

        // findItemsForDelete?.forEach(element => {

        //   const index = result.indexOf(element);
        //   console.log(index === -1);
        //   if (index > -1) {
        //     result.splice(index, 1);
        //   }
        // });
        // result.splice(0, 1);

        // console.log(result)

        setItem(result);
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
  }, [setItem]);

  const searchValueOnList = event => {
    setFilter(event.target.value);
  };

  const getVisibleItems = () => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <>
      <Container>
        <Title>Our gallery. Enjoy!</Title>
        {loading && <Loader />}
        <SearchForm value={filter} searchName={searchValueOnList} />
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
    </>
  );
}
