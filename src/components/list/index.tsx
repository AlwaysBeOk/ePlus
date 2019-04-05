import React, { Component } from 'react';
import ListServer from '../../services/list.service';

const LS = new ListServer();
class List extends React.Component {
  
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
      <ul>
        {this.state.list.map((item: {title: string}) => {
          return <li>
            {item.title}
          </li>
        })}
      </ul>
    );
  }
}

export default List;
