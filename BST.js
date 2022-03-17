
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Bst{
    constructor(){
        this.root = null;
    }
    insert(data){
        var newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root,newNode );
        }
}
 insertNode(node, newNode){
    if(newNode.data < node.data){
        if(node.left === null){
            node.left = newNode;
        }
        else{
            this.insertNode(node.left, newNode);
        }
    }
    else{
        if(node.right === null)
            node.right = newNode;
        else{
            this.insertNode(node.right, newNode);
        }
    }
 }
 inorder(root){
     if(root!==null){
    this.inorder(root.left);
    console.log(root.data);
    this.inorder(root.right);
     }
 }
 search(root, data){
     if(root === null)
      return;
    else if(data<root.data)
        return this.search(root.left, data);
    else if(data>root.data)
        return this.search(root.right, data);
    else
        return root; 
 }
}
let bst = new Bst();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(17);
bst.insert(25);
bst.inorder(bst.root);
console.log(bst.search(bst.root,15));
