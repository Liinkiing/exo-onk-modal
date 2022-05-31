import React from 'react';

import styles from './ModalActions.module.css';

const ModalActions = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
};

export default ModalActions;
