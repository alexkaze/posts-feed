import { useNavigate } from 'react-router-dom';

import { navigationMap } from '@/shared/model';
import { ButtonLink } from '@/shared/ui/ButtonLink';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Oops!</h1>
          <h2 className={styles.title}>404. Page not found</h2>

          <p className={styles.text}>
            It may have been moved, or you simply entered the page address
            incorrectly.
          </p>

          <ButtonLink onClick={() => navigate(navigationMap.home)}>
            Go to home page
          </ButtonLink>
        </div>

        <div className={styles['img-container']}>
          <img className={styles.img} src="/error.gif" alt="error page" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
