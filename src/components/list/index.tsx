import React, { Component } from 'react';
import ListServer from '../../services/list.service';
import { inject, observer } from 'mobx-react';

const LS = new ListServer();

@inject('store')
@observer
class List extends React.Component<any> {
  
  state={
    list: []
  };
  
  componentDidMount() {
    LS.getList().then((pre) => {
      console.log(pre);
      this.setState({list: pre})
    })
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item: {title: string, id: number}) => {
            return <li key={item.id}>
              {item.title}
            </li>
          })}
        </ul>
        <div>{this.props.store.addState.total}</div>
      </div>
    );
  }
}

export default List;
