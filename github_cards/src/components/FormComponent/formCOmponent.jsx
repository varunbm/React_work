import React, { Component } from "react";
import InputComponent from "../UI_Elements/Input/inputComponent";
import ButtonComponent from "../UI_Elements/Button/buttonComponent";

class FormComponent extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <InputComponent
          //   reff={this.props.reference}
          valu={this.props.val}
          on_change_={this.props.on_change}
          type="text"
          placeholder="Github username.."
          label="Username"
        />
        <ButtonComponent class="btn btn-primary btn-sm" label="Add user" />
      </form>
    );
  }
}

export default FormComponent;
