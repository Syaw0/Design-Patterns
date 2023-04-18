# Adapter Pattern


Imagine you have a toy car that only fits on a specific track. But your friend has a different track and you really want to play with your car on their track. So, you use an adapter to make your car fit on their track. The adapter changes the shape of your car's wheels so that it can fit and run smoothly on your friend's track. 

In programming, the adapter design pattern works similarly. It helps two incompatible interfaces work together by creating a middle layer (adapter) that translates one interface into another. For example, if you have a device that only works with USB-A ports but your computer only has USB-C ports, you can use a USB-C to USB-A adapter to connect them. The adapter acts as a bridge between the two different interfaces and allows them to communicate with each other.


### How Its Work


```javascript
// Define the Target interface that the Adapter will implement
class Target {
  request() {}
}

// Create the Adaptee class that we want to adapt
class Adaptee {
  specificRequest() {}
}

// Create the Adapter class that adapts the Adaptee to the Target interface
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }
  
  request() {
    this.adaptee.specificRequest();
  }
}

// Usage example
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request(); // Calls the specificRequest method on the Adaptee through the Adapter's request method


```


### Use Case



One real-world example of the Adapter pattern in JavaScript is when working with different APIs that have different interfaces. For instance, let's say you are building a weather app that retrieves weather data from two different weather APIs: OpenWeatherMap and Weather Underground. These two APIs have different interfaces, so you need to adapt them to a common interface to use them interchangeably in your app.

Here's an example code:
```javascript
// The Target interface that the client expects to use
class WeatherAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  
  getWeather(city) {
    console.log(Getting weather data for ${city}...);
  }
}

// The Adaptee for the OpenWeatherMap API
class OpenWeatherMapAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  
  getWeatherData(city) {
    console.log(Getting weather data from OpenWeatherMap API for ${city}...);
  }
}

// The Adapter class that adapts the OpenWeatherMapAPI to the WeatherAPI interface
class OpenWeatherMapAdapter extends WeatherAPI {
  constructor(apiKey) {
    super(apiKey);
    this.openWeatherMapAPI = new OpenWeatherMapAPI(apiKey);
  }
  
  getWeather(city) {
    this.openWeatherMapAPI.getWeatherData(city);
  }
}

// The Adaptee for the Weather Underground API
class WeatherUndergroundAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  
  getConditions(city) {
    console.log(Getting weather conditions from Weather Underground API for ${city}...);
  }
}

// The Adapter class that adapts the WeatherUndergroundAPI to the WeatherAPI interface
class WeatherUndergroundAdapter extends WeatherAPI {
  constructor(apiKey) {
    super(apiKey);
    this.weatherUndergroundAPI = new WeatherUndergroundAPI(apiKey);
  }
  
  getWeather(city) {
    this.weatherUndergroundAPI.getConditions(city);
  }
}

// Usage example
const openWeatherMapAdapter = new OpenWeatherMapAdapter('openweathermapapikey');
const weatherUndergroundAdapter = new WeatherUndergroundAdapter('weatherundergroundapikey');

openWeatherMapAdapter.getWeather('New York'); // Output: "Getting weather data from OpenWeatherMap API for New York..."
weatherUndergroundAdapter.getWeather('London'); // Output: "Getting weather conditions from Weather Underground API for London..."
```
In this example, we have two Adaptees (OpenWeatherMapAPI and WeatherUndergroundAPI) that have different interfaces, and two Adapter classes (OpenWeatherMapAdapter and WeatherUndergroundAdapter) that adapt them to the common WeatherAPI interface. The client code can use the WeatherAPI interface to retrieve weather data from either API interchangeably, without worrying about the differences in their interfaces.














