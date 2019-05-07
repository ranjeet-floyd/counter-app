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
  };

  render() {
    return (
      <div>
        {this.state.counters.map(c => (
          <Counter
            key={c.id}
            value={c.value}
            onDelete={this.handleDelete}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
