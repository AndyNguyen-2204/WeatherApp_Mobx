import { action, makeObservable, observable } from "mobx";

class WeatherStore {
  weatherCity = {
    city:"",
    weather:{

    }
  };

  getCity(data) {
    this.weatherCity.city = data.city;
  }
  getWeatherCity(data){
    this.weatherCity.weather=data
  }

  constructor() {
    makeObservable(this, {
      weatherCity: observable,
      getCity: action,
      getWeatherCity:action
    });
  }
}

export default WeatherStore;