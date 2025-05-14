import React from 'react';
import Footer from '@/components/Footer';
import styles from './style/index.module.less';

function UserInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

UserInfo.displayName = 'UserInfoPage';

export default UserInfo;
