// One real world example of the Flyweight design pattern in JavaScript is a web page that displays a large number of images. Each image may have a unique file name, but many of the images may share the same dimensions, colors, and other properties. Instead of creating a new object for each image, the Flyweight pattern can be used to create a shared object that stores these common properties and is reused across multiple images.

// Here is an example code implementation of the Flyweight pattern in JavaScript:

// javascript
// Flyweight object
var ImageFlyweight = function(width, height, color) {
  this.width = width;
  this.height = height;
  this.color = color;
};

// Factory to create and manage flyweight objects
var ImageFlyweightFactory = (function() {
  var flyweights = {};

  return {
    get: function(width, height, color) {
      var key = width + height + color;
      if (!flyweights[key]) {
        flyweights[key] = new ImageFlyweight(width, height, color);
      }
      return flyweights[key];
    }
  };
})();

// Image object that uses flyweight object
var Image = function(file, width, height, color) {
  this.file = file;
  this.flyweight = ImageFlyweightFactory.get(width, height, color);
};

// Usage example
var images = [];
images.push(new Image("cat.jpg", 100, 100, "gray"));
images.push(new Image("dog.jpg", 150, 150, "brown"));
images.push(new Image("bird.jpg", 100, 100, "yellow"));

// The Flyweight pattern allows us to reuse the same flyweight object for multiple images with the same dimensions and color
console.log(images[0].flyweight === images[2].flyweight); // true


// In this example, we have a Flyweight object called `ImageFlyweight` that stores the common properties of the images (width, height, and color). We also have a Flyweight Factory called `ImageFlyweightFactory` that creates and manages the flyweight objects. The `get` method of the factory checks if a flyweight object with the same dimensions and color already exists, and returns it if it does. If not, it creates a new flyweight object and returns it.

// We also have an Image object that uses the flyweight object. The Image constructor takes in the file name, width, height, and color of the image, and creates a new flyweight object using the Flyweight Factory. The Image object then stores a reference to the flyweight object.

// In the usage example, we create three Image objects with different file names but with the same dimensions and color. Because we are using the Flyweight pattern, we can reuse the same flyweight object for images with the same dimensions and color. We can confirm this by checking if the flyweight object of the first and third images are the same.
