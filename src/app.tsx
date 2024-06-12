import {getPhotosByPage} from './services/api.ts';
import {PhotoList} from './components/photo-list/photo-list.tsx';
import {useEffect, useState} from 'react';
import {Photo} from './components/photo-item/types.ts';
import {Loader} from './components/loader/loader.tsx';

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchingPhotos, setFetchingPhotos] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const fetchPhotos = async (currentPage: number) => {
    const response = await getPhotosByPage(currentPage);
    setPhotos([...photos, ...response.data]);
    setTotalCount(response.headers['x-total-count']);
    setCurrentPage(prevState => prevState + 1);
    setFetchingPhotos(false);
  }

  const scrollHandler = () => {
    if (document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) < 100) {
      setFetchingPhotos(true);
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    if (fetchingPhotos && photos.length < totalCount) {
      fetchPhotos(currentPage);
    }
  }, [fetchingPhotos]);

  return (
    <div>
      <PhotoList photos={photos}/>
      {!fetchingPhotos && <Loader />}
    </div>
    )
  ;
};

export {App};
