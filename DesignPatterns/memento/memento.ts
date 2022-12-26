// ? i think memento with linked list can be a great...
// ? just save states in linked list and proceed undo easily...
// but lets consider and simple example.

class Editor {
  private selection: string = "";
  private text: string = "";
  private cursorX: number = 0;
  private cursorY: number = 0;

  setSelection(width: string) {
    this.selection = width;
  }

  setText(txt: string) {
    this.text = txt;
  }

  setCursor(x: number, y: number) {
    this.cursorX = x;
    this.cursorY = y;
  }

  getText() {
    return this.text;
  }

  makeSnapShot() {
    return new Memento(
      this,
      this.text,
      this.cursorX,
      this.cursorY,
      this.selection
    );
  }
}

class Memento {
  constructor(
    private editor: Editor,
    private text: string,
    private cursorX: number,
    private cursorY: number,
    private selection: string
  ) {}

  restore() {
    this.editor.setText(this.text);
    this.editor.setSelection(this.selection);
    this.editor.setCursor(this.cursorX, this.cursorY);
  }
}

class Command {
  private backup!: Memento;
  constructor(private editor: Editor) {}

  takeBackup() {
    console.log("backup...");
    this.backup = this.editor.makeSnapShot();
  }

  useBackup() {
    if (this.backup) {
      console.log("using backup...");
      this.backup.restore();
    }
  }
}

const myEditor = new Editor();
const cmd = new Command(myEditor);

myEditor.setText("hello world");
cmd.takeBackup();
console.log(myEditor.getText());
myEditor.setText("im siavash");
console.log(myEditor.getText());
cmd.useBackup();
console.log(myEditor.getText());
