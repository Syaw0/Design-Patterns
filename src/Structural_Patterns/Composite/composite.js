// One real world example of the Composite design pattern in JavaScript is a tree structure. In a tree structure, each node can have zero or more child nodes. The Composite pattern allows us to treat the individual nodes and the entire tree structure as a single entity.

// Here is an example code:


class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  addChild(node) {
    this.children.push(node);
  }
  
  removeChild(node) {
    const index = this.children.indexOf(node);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }
  
  getChild(index) {
    return this.children[index];
  }
}

class Tree {
  constructor() {
    this.root = new TreeNode('root');
  }
  
  traverse(node, callback) {
    callback(node);
    for (let i = 0; i < node.children.length; i++) {
      this.traverse(node.children[i], callback);
    }
  }
}

const tree = new Tree();
const node1 = new TreeNode('node1');
const node2 = new TreeNode('node2');
const node3 = new TreeNode('node3');

node1.addChild(new TreeNode('node1.1'));
node1.addChild(new TreeNode('node1.2'));

node2.addChild(new TreeNode('node2.1'));
node2.addChild(new TreeNode('node2.2'));

tree.root.addChild(node1);
tree.root.addChild(node2);
tree.root.addChild(node3);

tree.traverse(tree.root, (node) => {
  console.log(node.value);
});


// In this example, we have a `TreeNode` class that represents a single node in the tree structure. Each `TreeNode` has a `value` property and an array of `children` nodes. We can add and remove child nodes using the `addChild` and `removeChild` methods.

// The `Tree` class represents the entire tree structure. It has a `root` property that is a `TreeNode` instance. The `traverse` method takes a callback function and recursively traverses the tree, calling the callback function on each node.

// We create a new `Tree` instance and add three nodes to the root node. We also add child nodes to the `node1` and `node2` nodes. Finally, we call the `traverse` method on the `Tree` instance, passing in a callback function that logs each node's value to the console.

// This example shows how the Composite pattern can be used to treat a tree structure as a single entity. We can add and remove nodes to the tree, and traverse the entire structure using a single method call.
