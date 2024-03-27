import type { IError } from './types';

import styles from './Error.module.scss';

const Error = ({ children }: IError) => {
  return <div className={styles.container}>{children}</div>;
};

export default Error;
