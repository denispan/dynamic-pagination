import styles from './styles.module.scss';

export interface Photo {
  id: number,
  title: string,
  thumbnailUrl: "https://via.placeholder.com/150/771796"
}

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
