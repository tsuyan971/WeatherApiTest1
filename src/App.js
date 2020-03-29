import React from "react";
import Header from "./weather/Header";
import Input from "./weather/Input";
import Messages from "./weather/Messages";
import Results from "./weather/Results";
import Axios from "axios";
import "./styles.css";

class App extends React.Component {
  componentDidMount() {
    this.loadStates();
  }

  state = {
    cityname: "Belo Horizonte",
    temp: 0,
    humidity: 0,
    windspeed: 0,
    weather: "",
    showvalue: "Show more",
    inputValue: "",
    errorShowed: false
  };

  getApi = () => {
    return Axios.create({
      baseURL: `https://openweathermap.org/data/2.5/weather?q=${
        this.state.cityname
      }&appid=b6907d289e10d714a6e88b30761fae22`
    });
  };
  submitCity = e => {
    e.preventDefault();
    document.getElementById("loadingif").style.display = "block";
    const valueofinput = this.state.inputValue;
    if (valueofinput !== "") {
      console.log(valueofinput);
      this.setState({ cityname: valueofinput });
      setTimeout(() => {
        console.log("cityname:" + this.state.cityname);
        this.loadStates();
      }, 1500);
    }
  };
  loadStates = async () => {
    try {
      document.getElementById("error").innerHTML = ``;
      const responseResults = await this.getResponse();
      document.getElementById("loadingif").style.display = "none";
      console.log(responseResults);
      this.setState({
        cityname: responseResults.data.name,
        temp: Math.round(responseResults.data.main.temp),
        humidity: responseResults.data.main.humidity,
        windspeed: responseResults.data.wind.speed,
        weather: responseResults.data.weather[0].main
      });
      console.log(this.state.cityname);
    } catch (err) {
      console.log(err.message);
      if (err.message === "Network Error") {
        document.getElementById("error").innerHTML = `Insert a valid city.`;
        document.getElementById("loadingif").style.display = "none";
        this.setState({
          cityname: "...",
          temp: "...",
          humidity: "...",
          windspeed: "...",
          weather: "..."
        });
      }
    }
  };

  getResponse = async () => {
    const api = this.getApi();
    const response = await api.get();
    console.log(response);
    return response;
  };
  changevalue = () => {
    if (this.state.showvalue === "Show more") {
      this.setState({ showvalue: "Show less" });
    } else {
      this.setState({ showvalue: "Show more" });
    }
  };
  handleInput = e => {
    e.preventDefault();
    const cityname = e.target.value;
    this.setState({ inputValue: cityname });
  };
  render() {
    return (
      <div className="App">
        <div id="everything">
          <Header />
          <Input
            handleInput={this.handleInput}
            changeStates={this.loadStates}
            submitCity={this.submitCity}
          />
          <br />
          <Messages />
          <br />
          <div id="stats">
            <Results
              showmorevalue={this.state.showvalue}
              changevalue={this.changevalue}
              showHideId={this.showHideId}
              cityName={this.state.cityname}
              humidity={this.state.humidity}
              windspeed={this.state.windspeed}
              weather={this.state.weather}
              temperature={this.state.temp}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
