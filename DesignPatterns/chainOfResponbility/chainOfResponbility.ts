abstract class AbstractLogger {
  static INFO: number = 1;
  static DEBUG: number = 2;
  static ERROR: number = 3;

  protected level!: number;
  protected nextLogger!: AbstractLogger;

  setNextLogger(logger: AbstractLogger) {
    this.nextLogger = logger;
  }

  logMsg(level: number, msg: string) {
    if (level >= this.level) {
      this.write(msg);
    } else {
      if (this.nextLogger != undefined) {
        this.nextLogger.logMsg(level, msg);
      } else {
        console.log(msg);
      }
    }
  }

  write(msg: string) {
    console.log("unformed msg: ", msg);
  }
}

class ConsoleLogger extends AbstractLogger {
  constructor(public level: number) {
    super();
  }

  write(msg: string): void {
    console.log(`this is CONSOLE LOG : ${msg}`);
  }
}

class ErrorLogger extends AbstractLogger {
  constructor(public level: number) {
    super();
  }

  write(msg: string): void {
    console.log(`this is ERROR LOG : ${msg}`);
  }
}

class FileLogger extends AbstractLogger {
  constructor(public level: number) {
    super();
  }

  write(msg: string): void {
    console.log(`this is File LOG : ${msg}`);
  }
}

class ChainDemo {
  private static getChainOfLogger(): AbstractLogger {
    let errorLogger = new ErrorLogger(AbstractLogger.ERROR);
    let fileLogger = new FileLogger(AbstractLogger.DEBUG);
    let consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);

    return errorLogger;
  }

  static main() {
    let loggerChain = this.getChainOfLogger();
    loggerChain.logMsg(AbstractLogger.INFO, "this is Information log");
    loggerChain.logMsg(AbstractLogger.ERROR, "this is Error log");
    loggerChain.logMsg(AbstractLogger.DEBUG, "this is FILE log");
    loggerChain.logMsg(0, "this is UNFORMED log");
  }
}

ChainDemo.main();
