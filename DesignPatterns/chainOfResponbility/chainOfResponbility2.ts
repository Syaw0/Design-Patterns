type Information = {
  id: number;
  address: string | null;
  zipCode: number | null;
  fingerPrint: string | null;
  face: string | null;
};
type HandlerTypes = "id" | "address" | "fingerPrint" | "reconcileFace";
// this is base of handlers
abstract class FullAuthentication {
  protected nextHandler!: FullAuthentication;
  protected type!: HandlerTypes;

  setNextHandler(handler: FullAuthentication) {
    this.nextHandler = handler;
    return handler;
  }

  authorization(information: Information, operationStatus: any) {
    let result = this.authentication(information);
    if (!result) {
      console.log("error happen during authentication", this.type);
      operationStatus[this.type] = false;
    } else {
      operationStatus[this.type] = true;
    }

    if (this.nextHandler) {
      this.nextHandler.authorization(information, operationStatus);
    } else {
      console.log("authentication end!");
      console.log(operationStatus);
    }
  }

  authentication(information: Information) {
    console.log("authentication start...");
    return true;
  }
}

class CheckId extends FullAuthentication {
  protected type: HandlerTypes = "id";
  authentication(information: Information) {
    if (information.id) {
      console.log(`im checking your id : ${information.id} --> passed`);
      return true;
    }
    return false;
  }
}

class CheckAddress extends FullAuthentication {
  protected type: HandlerTypes = "address";
  authentication(information: Information) {
    if (information.address && information.zipCode) {
      console.log(
        `im checking your address ${information.address}:${information.zipCode}`
      );
      return true;
    }
    return false;
  }
}

class CheckFingerPrint extends FullAuthentication {
  protected type: HandlerTypes = "fingerPrint";
  authentication(information: Information) {
    if (information.fingerPrint) {
      console.log(`im checking your fingerPrint ${information.fingerPrint}`);
      return true;
    }
    return false;
  }
}

class CheckFace extends FullAuthentication {
  protected type: HandlerTypes = "reconcileFace";
  authentication(information: Information) {
    if (information.face) {
      console.log(`im checking your face ${information.face}`);
      return true;
    }
    return false;
  }
}

class AuthDemo {
  protected idChecking: CheckId = new CheckId();
  protected addressChecking: CheckAddress = new CheckAddress();
  protected fingerPrintChecking: CheckFingerPrint = new CheckFingerPrint();
  protected faceChecking: CheckFace = new CheckFace();

  constructor(protected data: Information) {
    // we are chaining handlers...
    this.idChecking
      .setNextHandler(this.addressChecking)
      .setNextHandler(this.fingerPrintChecking)
      .setNextHandler(this.faceChecking);
  }
  startAuthentication() {
    this.idChecking.authorization(this.data, {});
  }
}

let data: Information = {
  address: null,
  zipCode: 233,
  face: "some pixel data 010101000101010",
  id: 113324314,
  fingerPrint: "010101000010101",
};

let au = new AuthDemo(data);
au.startAuthentication();
