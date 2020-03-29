import "../styles.css";
import React from "react";

class Results extends React.Component {
  componentDidMount() {
    document.getElementById("hiddenmore").style.display = "none";
  }
  showHideId = () => {
    const idElement = document.getElementById("hiddenmore");
    this.props.changevalue();
    if (idElement.style.display === "none") {
      idElement.style.display = "block";
    } else {
      idElement.style.display = "none";
    }
  };
  render() {
    return (
      <div>
        <h3>City name: {this.props.cityName} </h3>
        <h4>Current temperature: {this.props.temperature}°C</h4>
        <button onClick={this.showHideId} id="button1">
          {this.props.showmorevalue}
        </button>
        <div id="hiddenmore">
          <h4>Humidity: {this.props.humidity}%</h4>
          <h4>Wind speed: {this.props.windspeed} km/h</h4>
          <h4>Weather: {this.props.weather}</h4>
        </div>
      </div>
    );
  }
}

export default Results;
