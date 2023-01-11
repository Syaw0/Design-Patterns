// * The most useful pattern when we want share a steps of algorithm
// * then modify a some steps in subclasses ...


abstract class MineData {
  mine(source:string) {
    this.openFile(source)
    this.extractData('')
    this.parseData('')
    this.analyzeData('')
    this.sendReport('')
    this.closeFile('')
  }
  // the steps to perform mining on file
  openFile(path: string) {}
  extractData(file: string) {}
  parseData(data: string) {}
  analyzeData(parsedData: string) {}
  sendReport(analyze: string) {}
  closeFile(path: string) {}
}

// lets define concrete classes

class DocMining extends MineData {
  extractData(file: string): void {}

  parseData(data: string): void {}
  analyzeData(parsedData: string): void {}
}

class PdfMining extends MineData {
  extractData(file: string): void {}

  parseData(data: string): void {}
  analyzeData(parsedData: string): void {}

  sendReport(analyze: string): void {}
}


