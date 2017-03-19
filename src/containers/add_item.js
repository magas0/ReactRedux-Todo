import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todo_add } from '../actions/index';

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
  }

  handleSubmit(event) {
    event.preventDefault();    
    this.props.todo_add(this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="add-bar"
            type="text"
            value={this.state.value}
            onChange={event => this.handleChange(event.target.value)} />
          <input
            className="btn btn-primary"
            type="submit"
            value="Add Item" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { todo_add }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddItem);
