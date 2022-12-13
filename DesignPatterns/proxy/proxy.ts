interface image {
  display(): void;
}

class RealImage implements image {
  constructor(public fileName: string) {
    this.loadImage();
  }
  display(): void {
    console.log(`display this image : ${this.fileName}`);
  }
  loadImage() {
    console.log(`loading this file from db : ${this.fileName}`);
  }
}

class ProxyImage implements image {
  realImage!: RealImage;
  constructor(public fileName: string) {}

  display(): void {
    if (this.realImage == undefined) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }
}

let myImage = new ProxyImage("bipBip.png");
myImage.display();
// loading from db
// ! the point is that when we call it again image is already ready then just return that
// ? its seem like caching but using proxy to handle it
myImage.display();
