# One real world example of the Composite design pattern in Ruby is a file system. In this application, we can represent files and directories as nodes in a tree-like structure. The Composite design pattern allows us to treat both files and directories uniformly, as they both have similar behaviors such as being able to contain other files or directories.

# To implement the Composite design pattern in this application, we can create a Component interface that defines the common methods for both files and directories. This interface will be implemented by two concrete classes: File and Directory.

# The Directory class will have a collection of child components (files or directories) and will implement methods to add and remove child components. The File class will represent a leaf node in the tree structure and will not have any child components.

# Here's an example code snippet that demonstrates the Composite design pattern in Ruby for a file system application:


# Component interface
class FileSystemComponent
  def name
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end

  def size
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end

  def add(component)
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end

  def remove(component)
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end

  def display(indent = 0)
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end
end

# Leaf node class
class File < FileSystemComponent
  def initialize(name, size)
    @name = name
    @size = size
  end

  def name
    @name
  end

  def size
    @size
  end

  def display(indent = 0)
    puts "#{' ' * indent}- #{@name} (#{@size} KB)"
  end
end

# Composite node class
class Directory < FileSystemComponent
  def initialize(name)
    @name = name
    @children = []
  end

  def name
    @name
  end

  def size
    @children.sum(&:size)
  end

  def add(component)
    @children << component
  end

  def remove(component)
    @children.delete(component)
  end

  def display(indent = 0)
    puts "#{' ' * indent}+ #{@name} (#{size} KB)"
    @children.each { |child| child.display(indent + 2) }
  end
end

# Usage
root = Directory.new('root')
documents = Directory.new('Documents')
pictures = Directory.new('Pictures')
file1 = File.new('file1.txt', 10)
file2 = File.new('file2.txt', 20)
file3 = File.new('file3.txt', 30)

root.add(documents)
root.add(pictures)
documents.add(file1)
documents.add(file2)
pictures.add(file3)

root.display()


# In this example, we have implemented the Composite design pattern to create a file system application. The Directory class represents a composite node that can contain other files or directories, while the File class represents a leaf node that cannot have any child components. Both classes implement the Component interface, which defines the common methods for both types of nodes.

# The root directory is created as a composite node and two sub-directories (Documents and Pictures) are added to it. Three files are also created as leaf nodes and added to the appropriate directories. The display() method is called on the root directory to display the entire file system structure.

# The Composite design pattern allows us to treat both files and directories uniformly, which makes it easy to add new files or directories to the file system without modifying the existing code. It also allows us to perform operations on the entire file system structure, such as calculating the total size of all files and directories.
