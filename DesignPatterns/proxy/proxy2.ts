// * simple access protection pattern with proxy :D

interface chatRoomService {
  openChatRoom(id: number): void;
}

class ChatRoomProxy implements chatRoomService {
  userCredential: boolean = false;
  constructor(public realService: ChatRoomService) {}

  openChatRoom(id: number): void {
    if (!this.userCredential) {
      console.log("no credential found please authenticate");
    } else {
      this.realService.openChatRoom(id);
    }
  }
}

class ChatRoomService implements chatRoomService {
  openChatRoom(id: number): void {
    console.log("im opening the chatroom for you !");
  }
}

class ChatRoomApp {
  private realService: ChatRoomService;
  private proxyService: ChatRoomProxy;
  constructor() {
    this.realService = new ChatRoomService();
    this.proxyService = new ChatRoomProxy(this.realService);
  }
  openChatRoom(id: number) {
    this.proxyService.openChatRoom(id);
  }
  login(username: string, password: string) {
    // check in db !
    console.log("checking information !...");
    let checkInDb = true;
    this.proxyService.userCredential = checkInDb;
  }
}

let ch = new ChatRoomApp();
ch.openChatRoom(22);
// throw error so we login
ch.login("bela", "bela");
ch.openChatRoom(22);
