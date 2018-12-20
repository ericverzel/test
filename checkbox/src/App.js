import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAll: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxOne = this.handleCheckboxOne.bind(this);
    this.handleCheckboxTwo = this.handleCheckboxTwo.bind(this);
    this.handleCheckboxThree = this.handleCheckboxThree.bind(this);
    this.handleCheckboxFour = this.handleCheckboxFour.bind(this);
    this.handleCheckboxFive = this.handleCheckboxFive.bind(this);
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      checkAll: value,
      checkbox1: value,
      checkbox2: value,
      checkbox3: value,
      checkbox4: value,
      checkbox5: value
    });
  };

  handleCheckboxOne = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const {
      checkAll,
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5
    } = this.state;

    this.setState({
      checkbox1: value,
      checkAll: checkbox1 && checkbox2 && checkbox3 && checkbox4 && checkbox5
    });
  };

  handleCheckboxTwo = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const {
      checkAll,
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5
    } = this.state;

    this.setState({
      checkbox2: value,
      checkAll: checkbox1 && checkbox2 && checkbox3 && checkbox4 && checkbox5
    });
  };

  handleCheckboxThree = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const {
      checkAll,
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5
    } = this.state;

    this.setState({
      checkbox3: value,
      checkAll: checkbox1 && checkbox2 && checkbox3 && checkbox4 && checkbox5
    });
  };

  handleCheckboxFour = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const {
      checkAll,
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5
    } = this.state;

    this.setState({
      checkbox4: value,
      checkAll: checkbox1 && checkbox2 && checkbox3 && checkbox4 && checkbox5
    });
  };

  handleCheckboxFive = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const {
      checkAll,
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5
    } = this.state;

    this.setState({
      checkbox5: value,
      checkAll: checkbox1 && checkbox2 && checkbox3 && checkbox4 && checkbox5
    });
  };

  render() {
    return (
      <form>
        <label>
          Check All:
          <input
            name="checkAll"
            type="checkbox"
            checked={
              this.state.checkAll ||
              (this.state.checkbox2 &&
                this.state.checkbox1 &&
                this.state.checkbox3 &&
                this.state.checkbox4 &&
                this.state.checkbox5)
            }
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Checkbox1
          <input
            name="checkbox1"
            type="checkbox"
            checked={this.state.checkAll || this.state.checkbox1}
            onChange={this.handleCheckboxOne}
          />
        </label>
        <br />
        <label>
          Checkbox2
          <input
            name="checkbox2"
            type="checkbox"
            checked={this.state.checkAll || this.state.checkbox2}
            onChange={this.handleCheckboxTwo}
          />
        </label>
        <br />
        <label>
          Checkbox3
          <input
            name="checkbox3"
            type="checkbox"
            checked={this.state.checkAll || this.state.checkbox3}
            onChange={this.handleCheckboxThree}
          />
        </label>
        <br />
        <label>
          Checkbox4
          <input
            name="checkbox4"
            type="checkbox"
            checked={this.state.checkAll || this.state.checkbox4}
            onChange={this.handleCheckboxFour}
          />
        </label>
        <br />
        <label>
          Checkbox5
          <input
            name="checkbox5"
            type="checkbox"
            checked={this.state.checkAll || this.state.checkbox5}
            onChange={this.handleCheckboxFive}
          />
        </label>
        <br />
      </form>
    );
  }
}

export default App;
