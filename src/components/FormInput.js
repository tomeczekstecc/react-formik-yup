import React, { Component } from "react";

export class FormInput extends Component {
  render(props) {
    return (
      <div>
        <label> {this.props.header}
          <input type="text" />
        </label>
      </div>
    );
  }
}

export default FormInput;
