import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};