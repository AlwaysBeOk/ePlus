import React, { Component } from 'react';
import './index.scss';

import styles from './button.module.scss';

class Button extends React.Component {
  render() {
    return (
      <button className={styles.error}>
        第一个按钮{process.env.REACT_APP_CONST_INT}
      </button>
    );
  }
}

export default Button;
