import React from 'react';

import styles from './ModalBody.module.css'

const ModalBody = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
};

export default ModalBody;
