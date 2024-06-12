import styles from './styles.module.scss';
import {Photo, PhotoItem} from '../photo-item/photo-item.tsx';

interface Props {
  photos: Photo[]
}

export const PhotoList = ({photos}: Props) => {
  return (
    <ul className={styles.list}>
      {photos.map((photo: Photo) => (
         <li className={styles.item} key={photo.id}>
          <PhotoItem id={photo.id} title={photo.title} thumbnailUrl={photo.thumbnailUrl} />
        </li>
      ))}
    </ul>
  )
};
