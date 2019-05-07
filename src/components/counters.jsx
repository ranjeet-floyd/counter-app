import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 3 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("Event handle called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(c => (
          <Counter key={c.id} onDelete={this.handleDelete} counter={c} />
        ))}
      </div>
    );
  }
}

export default Counters;
