import React from 'react';

export class Filter extends React.Component {
  handleChange = e => {
    this.props.valueOut(e.target.value.toLowerCase().trim());
  };
  value = () => {
    return this.props.valueIn;
  };

  render() {
    return (
      <>
        <p>Find contact by name</p>
        <input
          type="text"
          name="filter"
          value={this.value()}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
