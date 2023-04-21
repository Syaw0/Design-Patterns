Here is an example implementation of the Decorator pattern in JavaScript:

// Base Text class
class Text {
  constructor(content) {
    this.content = content;
  }
  
  getContent() {
    return this.content;
  }
}

// Decorator classes
class BoldTextDecorator {
  constructor(text) {
    this.text = text;
  }
  
  getContent() {
    return "<b>" + this.text.getContent() + "</b>";
  }
}

class ItalicTextDecorator {
  constructor(text) {
    this.text = text;
  }
  
  getContent() {
    return "<i>" + this.text.getContent() + "</i>";
  }
}

// Usage example
let text = new Text("Hello, world!");
text = new BoldTextDecorator(text);
text = new ItalicTextDecorator(text);

console.log(text.getContent()); // Output: <i><b>Hello, world!</b></i>
