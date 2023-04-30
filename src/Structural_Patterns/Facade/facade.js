// One real-world example of the Facade design pattern in JavaScript is a library that simplifies the process of making AJAX requests. 

// Here's an example implementation:


function ajaxFacade(url, method, data, successCallback, errorCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        successCallback(xhr.responseText);
      } else {
        errorCallback(xhr.statusText);
      }
    }
  };
  
  xhr.send(JSON.stringify(data));
}


// In this implementation, the `ajaxFacade` function acts as a simplified interface for making AJAX requests. It takes in the URL, HTTP method, data to send, success callback function, and error callback function as parameters. 

// Internally, it creates a new `XMLHttpRequest` object, sets the appropriate headers and callbacks, and sends the request with the provided data. When the request completes, it checks the status code and calls either the success or error callback function accordingly. 

// By using this facade function instead of directly interacting with the `XMLHttpRequest` object, developers can simplify their code and avoid dealing with low-level implementation details.
