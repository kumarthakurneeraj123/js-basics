
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
findMin(root){
    if(root==null){
        console.log('Tree is empty');
        return -1;
    }
    var current = root;
   while(current.left!=null){
       current = current.left;
   }
   console.log('min =' + current.data);
}
findMax(root){
    if(root==null){
        console.log('Tree is empty');
        return -1;
    }
    var current = root;
   while(current.right!=null){
       current = current.right;
   }
   console.log('max =' + current.data);
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
bst.findMin(bst.root);
bst.findMax(bst.root);