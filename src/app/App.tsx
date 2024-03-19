import PostsList from '@/widgets/ui/PostsList';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Posts Feed</h1>
      </header>

      <main className={styles.main}>
        <PostsList />
      </main>

      <footer className={styles.footer}>
        <div>© Posts Feed</div>
      </footer>
    </div>
  );
};

export default App;
