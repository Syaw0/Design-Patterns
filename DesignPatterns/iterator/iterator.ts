interface MyIterator {
  hasNext: () => boolean;
  next(): object;
}

interface Container {
  getIterator(): MyIterator;
}

class NameRepo implements Container {
  names: string[] = ["john", "willy", "albert", "seneca", "socrates"];

  getIterator(): MyIterator {
    return new NameIterator(this.names);
  }
}

class NameIterator implements MyIterator {
  index: number = 0;
  constructor(private iterateObj: any) {}
  hasNext() {
    if (this.iterateObj.length == this.index) {
      return false;
    }
    return true;
  }

  next(): object {
    if (this.hasNext()) {
      this.index += 1;
      return this.iterateObj[this.index - 1];
    }
    return { status: false };
  }
}

const demo = new NameRepo();

const demoIterator = demo.getIterator();
while (demoIterator.hasNext()) {
  console.log(demoIterator.next());
}

// output:
//john
// willy
// albert
// seneca
// socrates
