// ? imagine we have to work with some complex library methods
// ? we can use facade pattern to create a interface for client and what client need

// TODO we have an convertor app , simple is it
// TODO we use an complex Third-party library to convert files
// TODO we create an interface and connect to the library

// the lib

function convertMp4ToMp3() {
  // some complex statements...
}

function convertMp4ToMkv() {
  // some complex statements...
}

function convertMp3ToOgg() {
  // some complex statements...
}

// and so on ...

interface MyFile<T> {
  data: {};
  format: T;
}

type Formats = "ogg" | "mp3" | "mkv" | "mp4";

interface IConvertor {
  convertMp3ToOgg(): MyFile<"ogg">;
  convertMp4ToMp3(): MyFile<"mp3">;
  convertMp4ToMkv(): MyFile<"mkv">;
  convertMkvToMp4(): MyFile<"mp4">;
}

class Convertor implements IConvertor {
  constructor(public file: MyFile<Formats>) {}

  convertMp3ToOgg(): MyFile<"ogg"> {
    this.file.format = "ogg";
    return this.file as MyFile<"ogg">;
  }

  convertMp4ToMkv(): MyFile<"mkv"> {
    this.file.format = "mkv";
    return this.file as MyFile<"mkv">;
  }

  convertMp4ToMp3(): MyFile<"mp3"> {
    this.file.format = "mp3";
    return this.file as MyFile<"mp3">;
  }

  convertMkvToMp4(): MyFile<"mp4"> {
    this.file.format = "mp4";
    return this.file as MyFile<"mp4">;
  }
}

const MyFile: MyFile<Formats> = { data: "some binary data", format: "mkv" };
console.log("file format before convert", MyFile.format);
const convertor = new Convertor(MyFile);
convertor.convertMkvToMp4();
console.log("file format after convert", MyFile.format);
