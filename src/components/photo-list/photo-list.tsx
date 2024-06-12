import styles from './styles.module.scss';
import {PhotoItem} from '../photo-item/photo-item.tsx';
import {Photo} from '../photo-item/types.ts';

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
