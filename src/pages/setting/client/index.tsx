import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import styles from './style/index.module.less';

function Client() {
  useEffect(() => {
    document.body.setAttribute('arco-theme', 'light');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles['content-inner']}>client</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

Client.displayName = 'ClientPage';

export default Client;
