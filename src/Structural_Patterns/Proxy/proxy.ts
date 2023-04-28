// One real-world example of the Proxy design pattern in TypeScript is a logging proxy for API requests. This proxy intercepts API requests and logs information about the request and response, providing valuable debugging information for developers.

interface API {
  getData(): Promise<any>;
}

class RealAPI implements API {
  async getData() {
    const response = await fetch("https://example.com/data");
    return response.json();
  }
}

class LoggingProxy implements API {
  private realAPI: RealAPI;

  constructor() {
    this.realAPI = new RealAPI();
  }

  async getData() {
    console.log("API request started");
    const startTime = Date.now();
    const data = await this.realAPI.getData();
    const endTime = Date.now();
    console.log(`API request finished in ${endTime - startTime}ms`);
    console.log(`Response data: ${JSON.stringify(data)}`);
    return data;
  }
}


// In this implementation, the `API` interface defines the `getData` method that returns a Promise for retrieving data from an API. The `RealAPI` class implements this interface and actually makes the API request using the `fetch` function.

// The `LoggingProxy` class also implements the `API` interface and has a private `RealAPI` instance. When the `getData` method is called on the proxy, it logs a message indicating that the API request has started, records the start time, calls the `getData` method on the real API, records the end time, logs a message indicating that the API request has finished and how long it took, and logs the response data. Finally, it returns the response data to the caller.

// This logging proxy can be used in applications that make API requests to provide developers with valuable debugging information. By intercepting API requests and logging information about them, developers can quickly identify and fix issues with their API integration.
