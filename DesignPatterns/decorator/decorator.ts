interface DataSource {
  writeData(data: string): void;
  readData(): string;
}

class FileDataSource implements DataSource {
  constructor(public filename: string) {
    // filename...
  }
  writeData(data: string): void {
    // write on file
  }
  readData(): string {
    return this.filename; // read and return file
  }
}

class DataSourceDecorator implements DataSource {
  wrapper: DataSource;
  constructor(source: DataSource) {
    this.wrapper = source;
  }

  writeData(data: string): void {
    this.wrapper.writeData(data);
  }

  readData(): string {
    return this.wrapper.readData();
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  constructor(source: DataSource) {
    super(source);
  }
  writeData(data: string): void {
    // this.wrapper.writeData("encrypted data")
  }
  readData(): string {
    // decrypted then return
    return this.wrapper.readData();
  }
}

class CompressionDecorator extends DataSourceDecorator {
  constructor(source: DataSource) {
    super(source);
  }
  writeData(data: string): void {
    // this.wrapper.writeData("compressed data")
  }
  readData(): string {
    // decompress and return data
    return this.wrapper.readData();
  }
}

class Application {
  use() {
    let source: DataSource = new FileDataSource("file.dat");
    source.writeData("some salary source");

    source = new CompressionDecorator(source);
    source.writeData("some salary source");

    // Encryption > Compression > FileDataSource

    source = new EncryptionDecorator(source);
    source.writeData("write some data ");

    // ! attention to the flow this object now have compressed and encrypted data
    // TODO more information about this pattern
  }
}
