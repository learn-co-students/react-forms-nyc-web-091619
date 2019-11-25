import React from "react";

class Form extends React.Component {
  render() {
    const { formData, handleChange } = this.props;

    return (
      <form>
        <input
          type="text"
          name="firstName"
          onChange={event => handleChange(event)}
          value={formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={event => handleChange(event)}
          value={formData.lastName}
        />
      </form>
    );
  }
}

export default Form;
