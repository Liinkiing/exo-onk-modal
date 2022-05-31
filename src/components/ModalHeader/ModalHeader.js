import React from 'react';

import styles from "./ModalHeader.module.css";
import { Button, Typography } from '@ornikar/kitt';

const ModalHeader = ({ children }) => {
  return (
    <div className={styles.root}>
      <Typography.h5>
        {children}
      </Typography.h5>
      <Button icon="cross" />
    </div>
  )
};

export default ModalHeader;
