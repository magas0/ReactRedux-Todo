import React, { Component } from 'react';
import ItemList from './containers/item_list';
import AddItem from './containers/add_item';

class App extends Component {
  render() {
    return (
      <div className="container">
          <h2>Simple Todo List Example</h2>
          <h5>Using React-Redux / Create-react-app / Bootstrap</h5>
          <AddItem />
          <ItemList />
      </div>
    );
  }
}

export default App;
