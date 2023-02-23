class Msg {
  constructor(
    public sender: User,
    public receiver: User,
    public msg: string,
    public date: Date
  ) {}
}

class ChatRoom {
  users: User[] = [];

  handlerMessage(sender: User, receiverId: string, msg: string) {
    const receiver = this.users.filter((u) => u.userId == receiverId)[0];
    const msgObj = new Msg(sender, receiver, msg, new Date());
    sender.insertToMsgList(msgObj);
    receiver.insertToMsgList(msgObj);
  }
}

class User {
  msgList: Msg[] = [];
  constructor(public userId: string, public chatRoom: ChatRoom) {
    chatRoom.users.push(this);
  }

  sendMessage(receiverId: string, msg: string) {
    this.chatRoom.handlerMessage(this, receiverId, msg);
  }

  insertToMsgList(msg: Msg) {
    this.msgList.push(msg);
  }

  public getMessages() {
    return this.msgList;
  }
}

const chatroom = new ChatRoom();
const user1 = new User("1", chatroom);
const user2 = new User("2", chatroom);

user1.sendMessage("2", "Hello User1");
user2.sendMessage("2", "Hey... How you doing User1?");

console.log(user2.getMessages());
console.log(user1.getMessages());
