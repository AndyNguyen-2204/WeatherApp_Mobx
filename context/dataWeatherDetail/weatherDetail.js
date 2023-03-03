import { action, makeObservable, observable } from "mobx";

class WeatherDetailStore {
  weatherDetail = {
  };

  getWeatherDetail(data){
    this.weatherDetail=data
  }

  constructor() {
    makeObservable(this, {
      weatherDetail: observable,
      getWeatherDetail: action,
    });
  }
}

export default WeatherDetailStore;