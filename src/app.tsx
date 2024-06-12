import {PhotoList} from './components/photo-list/photo-list.tsx';
import {useEffect, useState} from 'react';
import {Loader} from './components/loader/loader.tsx';
import {Container} from './components/container/container';
import axios from 'axios';
import {Photo} from './components/photo-item/photo-item.tsx';

const URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10'

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchingPhotos, setFetchingPhotos] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const getPhotosByPage = async (pageNumber: number = 1) => {
    return await axios.get(`${URL}&_page=${pageNumber}`);
  }

  const fetchPhotos = async (currentPage: number) => {
    const response = await getPhotosByPage(currentPage);
    setPhotos([...photos, ...response.data]);
    setTotalCount(response.headers['x-total-count']);
    setCurrentPage(currentPage + 1);
    setFetchingPhotos(false);
  }

  const scrollHandler = () => {
    if (document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) < 200) {
      setFetchingPhotos(true);
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    if (fetchingPhotos && photos.length <= totalCount) {
      console.log(currentPage);
      fetchPhotos(currentPage);
    }
  }, [fetchingPhotos]);

  return (
    <Container>
      <PhotoList photos={photos}/>
      {fetchingPhotos && <Loader />}
    </Container>
    )
  ;
};

export {App};
