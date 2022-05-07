class Node{
    constructor(data,left,right){
        this.data=data;
        this.left=left;
        this.right=right;
        this.show=this.show.bind(this);
    }
    show(){
        return this.data;
    }
}
class BinaryTree{
    constructor(){
        this.root=null; //staring point of binary tree
        this.current=null; //tracking variable of binary tree
        this.insert=this.insert.bind(this);
        this.moveLeft=this.moveLeft.bind(this);
        this.moveRight=this.moveRight.bind(this);
        this.compareNodeWithCurrent=this.compareNodeWithCurrent.bind(this);
        this.getMin=this.getMin.bind(this);
        this.getMax=this.getMax.bind(this);
        this.find=this.find.bind(this);
        this.checkLeftNode=this.checkLeftNode.bind(this);
        this.checkRightNode=this.checkRightNode.bind(this);
    }
    find(data){
        this.current=this.root;
        if(this.current.data==data){
            console.log("found",this.current.data);
            
        }   
        else if(this.current.data>data){
            if(this.current.left!=null){
                this.current=this.current.left;
                return this.checkLeftNode(data);
            }
            else{
                console.log("Not found!")
            }
          
        } 
        else if(this.current.data<data){
            if(this.current.right!=null){
                this.current=this.current.right;
                return this.checkRightNode(data);
            }
            else{
                console.log("Not found!")
            }
            
        }
        else{
            return ;
        }
    }
    checkLeftNode(data){
        if(this.current.data==data){
            console.log("found",this.current.data);
        }   
        else if(this.current.data>data){
            if(this.current.left!=null){
                this.current=this.current.left;
                return this.checkLeftNode(data);
            }
            else{
                console.log("Not found!")
            }
          
        } 
        else if(this.current.data<data){
            if(this.current.right!=null){
                this.current=this.current.right;
                return this.checkRightNode(data);
            }
            else{
                console.log("Not found!")
            }
            
        }
        else{
            return ;
        }
    }
    checkRightNode(data){
        if(this.current.data==data){
            console.log("found",this.current.data);
        }   
        else if(this.current.data>data){
            if(this.current.left!=null){
                this.current=this.current.left;
                return this.checkLeftNode(data);
            }
            else{
                console.log("Not found!")
            }
          
        } 
        else if(this.current.data<data){
            if(this.current.right!=null){
                this.current=this.current.right;
                return this.checkRightNode(data);
            }
            else{
                console.log("Not found!")
            }
            
        }
        else{
            return ;
        }
    }
    insert(data){
        var node=new Node(data,null,null);  
        if(this.root==null){
            this.root=node;
        }
        else{
            this.current=this.root;
            this.compareNodeWithCurrent(node);
        }
    }
    compareNodeWithCurrent(node){
        if(this.current.data>node.data){
            this.moveLeft(node);
        }
        else if(this.current.data<node.data){
            this.moveRight(node);
        }
        
    }
    moveLeft(node){
        if(this.current.left==null){
            this.current.left=node;
        }
        else{
            this.current=this.current.left;
            this.compareNodeWithCurrent(node);
        }
    }
    moveRight(node){
        if(this.current.right==null){
            this.current.right=node;
        }
        else{
            this.current=this.current.right;
            this.compareNodeWithCurrent(node);
        }
    }
    getMax(){
        this.current=this.root;
        while(this.current.right!=null){
            this.current=this.current.right;
        }
        return console.log("Max value: ",this.current.data);
    }
    getMin(){
        this.current=this.root;
        while(this.current.left!=null){
            this.current=this.current.left;
        }
        return console.log("Min value: ",this.current.data);
    }
}
function inOrder(node){
    if(node!=null){
        inOrder(node.left);
        console.log(node.show()+"");              
        inOrder(node.right);
    }
}
var bst=new BinaryTree();
bst.insert(54);
bst.insert(40);
bst.insert(80);
bst.insert(13);
bst.insert(86);
bst.insert(12);
bst.insert(100);
bst.insert(1);
bst.insert(4);
bst.insert(8);
bst.insert(35);
bst.insert(44);
inOrder(bst.root);
bst.getMax();
bst.getMin();
bst.find(1000);