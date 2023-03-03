import React from "react";
import WeatherStore from "./weatherStore/weatherStore"
import WeatherDetail from "./dataWeatherDetail/weatherDetail"

class RootStore {
  constructor() {
    this.weatherStore= new WeatherStore(this)
    this.weatherDetail=new WeatherDetail(this)
  }
}

const StoresContext = React.createContext(new RootStore());

// đây là function có sẵn để app kết nối tới các stores
export const useStores = () => React.useContext(StoresContext);