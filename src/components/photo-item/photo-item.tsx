import styles from './styles.module.scss';
import {Photo} from './types.ts';

export const PhotoItem = ({id, title, thumbnailUrl}: Photo) => {

  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <span>id {id}</span>
        <h4>{title}</h4>
      </div>
      <div className={styles.mediaBlock}>
        <img src={thumbnailUrl} alt="photo"/>
      </div>
    </div>
  );
};
