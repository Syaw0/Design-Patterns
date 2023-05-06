// One real-world example of the Composite design pattern in TypeScript is a file system. In a file system, a directory can contain both files and other directories. Each file and directory has its own set of properties, such as name, size, and creation date.

// Here is an example code that demonstrates the Composite design pattern in TypeScript for a file system:


abstract class FileSystemComponent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getSize(): number;
}

class File extends FileSystemComponent {
  size: number;

  constructor(name: string, size: number) {
    super(name);
    this.size = size;
  }

  getSize(): number {
    return this.size;
  }
}

class Directory extends FileSystemComponent {
  components: FileSystemComponent[] = [];

  add(component: FileSystemComponent): void {
    this.components.push(component);
  }

  remove(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);
    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  getSize(): number {
    let totalSize = 0;
    for (const component of this.components) {
      totalSize += component.getSize();
    }
    return totalSize;
  }
}

// Usage
const file1 = new File("file1.txt", 10);
const file2 = new File("file2.txt", 20);
const directory1 = new Directory("directory1");
directory1.add(file1);
directory1.add(file2);
const file3 = new File("file3.txt", 30);
const directory2 = new Directory("directory2");
directory2.add(file3);
directory1.add(directory2);

console.log(directory1.getSize()); // Output: 60


// In this example, the `FileSystemComponent` is an abstract class that defines the common properties and methods of files and directories. The `File` class extends `FileSystemComponent` and adds a `size` property and `getSize` method that returns the size of the file. The `Directory` class also extends `FileSystemComponent` and adds an array of `components` that can be files or other directories. The `add` and `remove` methods allow adding or removing components from the directory. The `getSize` method recursively calculates the total size of the directory and its components.

// The usage code creates a file system hierarchy with a directory containing two files and another directory containing one file. The `getSize` method is called on the root directory, which returns the total size of all components in the hierarchy.
