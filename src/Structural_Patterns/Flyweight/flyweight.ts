// One real world example of Flyweight design pattern code in Typescript can be used in a web application that displays a large number of images. Instead of creating a separate object for each image, the Flyweight pattern can be used to share common data between similar objects.

// For example, let's say we have an Image class that contains properties such as name, size, and source. Instead of creating a new object for each image, we can create a Flyweight factory that stores a pool of shared Image objects. When a new image is requested, the factory checks if an existing Image object with the same properties already exists in the pool. If it does, the factory returns the existing object. If not, it creates a new object and adds it to the pool for future use.

// Here's an example implementation of the Flyweight pattern in Typescript:


class Image {
  public name: string;
  public size: number;
  public source: string;

  constructor(name: string, size: number, source: string) {
    this.name = name;
    this.size = size;
    this.source = source;
  }
}

class ImageFlyweightFactory {
  private images: { [key: string]: Image } = {};

  public getImage(name: string, size: number, source: string): Image {
    const key = `${name}_${size}_${source}`;

    if (!this.images[key]) {
      this.images[key] = new Image(name, size, source);
    }

    return this.images[key];
  }
}

// Example usage:
const factory = new ImageFlyweightFactory();

const image1 = factory.getImage('cat', 100, 'https://example.com/cat.jpg');
const image2 = factory.getImage('dog', 200, 'https://example.com/dog.jpg');
const image3 = factory.getImage('cat', 100, 'https://example.com/cat.jpg');

console.log(image1 === image2); // false
console.log(image1 === image3); // true


// In this example, the ImageFlyweightFactory stores a pool of Image objects based on their name, size, and source properties. When a new Image object is requested, the factory checks if an existing object with the same properties already exists in the pool. If it does, the factory returns the existing object. If not, it creates a new object and adds it to the pool for future use.

// This implementation can be useful in a web application that displays a large number of images, as it reduces memory usage by sharing common data between similar objects.
