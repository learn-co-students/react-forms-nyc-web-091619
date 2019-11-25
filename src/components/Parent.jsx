import React, { Component } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

class Parent extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <DisplayData formData={this.state} />
      </React.Fragment>
    );
  }
}

export default Parent;
