export interface WeatherApiResponse {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: Forecast;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  hour: Hour[];
}

export interface Hour {
  time: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
  };
}

export default WeatherApiResponse;
