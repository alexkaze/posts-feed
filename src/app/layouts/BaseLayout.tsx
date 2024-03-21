import { Outlet } from 'react-router-dom';

import styles from './BaseLayout.module.scss';

const BaseLayout = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Posts Feed</h1>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div>© Posts Feed</div>
      </footer>
    </div>
  );
};

export default BaseLayout;
