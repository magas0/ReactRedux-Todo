import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todo_delete } from '../actions/index';

class ItemList extends Component {

  // This function will render the list of todo items
  // TODO: separate this item into another component ItemDetail

  render_item_list() {    
    return this.props.todo_list.map( (item) => {
        return(
          <li className="list-group-item list-group-item-action justify-content-between" key={item.id}>
            {item.item}
            <button
              className="btn btn-outline-danger"
              onClick={event => this.props.todo_delete(item.id)}>X</button>
          </li>
        );
      });
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.render_item_list()}
      </ul>
    );
  }
}

function mapStateToProps({ todo_list }) {
  return { todo_list };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { todo_delete }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
