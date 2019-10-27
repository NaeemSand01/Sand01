import React, { Component } from "react";
import "./css/weatherApp.css";
import WeatherForm from "../weatherapp/WeatherForm";

const WEATHER_API_KEY = "null";

class WeatherApp extends Component {
  state = {
    city: "",
    country: "",
    description: "",
    icon: "",
    main: "",
    celsius: "",
    tempMax: "",
    tempMin: "",
    date: new Date(),
    error: false
  };
  weatherIcon = {
    thunderStorm: "top-thunderstorm",
    drizzle: "top-rain",
    rain: "top-rain",
    aSnow: "top-snow",
    clear: "top",
    clouds: "top-clouds",
    atmosphere: "top"
  };

  componentDidMount() {
    this.getWeatherIcons();
  }

  callTime() {
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  //Convert response data number to celsius
  calCelsius = temp => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  };

  //Function using switch statement to change weather images
  getWeatherIcons = (icons, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.thunderStorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.aSnow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.clouds });
    }
  };

  //Api call using apiKey
  loadWeather = async e => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;

    if (city && country) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}`
      );
      const res = await api_call.json();

      //Setting state
      this.setState({
        city: res.name,
        country: res.sys.country,
        description: res.weather[0].description,
        celsius: this.calCelsius(res.main.temp),
        tempMax: this.calCelsius(res.main.temp_max),
        tempMin: this.calCelsius(res.main.temp_min),
        main: res.weather[0].main,
        error: false
      });
      this.getWeatherIcons(this.weatherIcon, res.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="image-bg-3">
          <WeatherForm getWeather={this.loadWeather} error={this.state.error} />
          <div className="container ">
            <div className="row">
              <div className="col">
                <div className="weather-card one">
                  <div className={this.state.icon}>
                    <div className="wrapper">
                      <div className="mynav">
                        <a href="..." alt="nextPage">
                          <span>
                            <i className="fas fa-chevron-left" />
                          </span>
                        </a>
                        <a href="..." alt="nextPage">
                          <span>
                            <i className="fas fa-cog" />
                          </span>
                        </a>
                      </div>
                      <h1 className="heading">{this.state.description}</h1>
                      <h3 className="location">
                        {this.state.city}, {this.state.country}
                      </h3>
                      <p className="temp">
                        <span className="temp-value">
                          {this.state.celsius}&deg;
                        </span>

                        <a href="..." alt="temp">
                          <span className="temp-type">C</span>
                        </a>
                      </p>
                    </div>
                    {this.state.celsius ? (
                      <div className="row tempStyle">
                        <div className="col-md-6">
                          <h3 className="tempdata">
                            {this.state.tempMin}&deg;
                          </h3>
                        </div>
                        <div className="col-md-6">
                          <h3 className="tempdata">
                            {this.state.tempMax}&deg;
                          </h3>
                        </div>
                      </div>
                    ) : null}

                    <div className="timeStyle">
                      <h3>{this.state.date.toLocaleTimeString()}</h3>
                    </div>
                    {this.callTime()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WeatherApp;
