import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './index.scss';

import styles from './button.module.scss';

@inject('store')
@observer
class Button extends React.Component<any> {
  
  //
  // constructor (props){
  //   store: props.store.addStore;
  // }
  
  
  
  render() {
    console.log(this.props);
    const { store } = this.props;
    return (
      <div>
        <button className={styles.error} onClick={store.addState.addNum1}>
          add1
        </button>
        {/*<button className={styles.error} onClick={this.props.store.addState.addNum2}>*/}
          {/*add2*/}
        {/*</button>*/}
      </div>
    );
  }
}

export default Button;
