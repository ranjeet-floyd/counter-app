import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    let classes = this.getBadgeClasses();
    return (
      <div>
        <h4>Counter # : {this.props.value} </h4>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    // const x = <h1>Zero</h1>;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
