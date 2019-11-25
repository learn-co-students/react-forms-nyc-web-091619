import React, { Component } from "react";

class DisplayData extends Component {
  render() {
    const { firstName, lastName } = this.props.formData;
    return (
      <React.Fragment>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
      </React.Fragment>
    );
  }
}

export default DisplayData;
