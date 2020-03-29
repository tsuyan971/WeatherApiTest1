import "../styles.css";
import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submitCity}>
          <h4>Insert a city</h4>

          <input
            type="text"
            placeholder="Insert the city's name"
            id="cityinput"
            onChange={this.props.handleInput}
          />
          <button type="submit" id="button1">
            Search City
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
