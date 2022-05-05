class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=new Node("head");
        this.find=this.find.bind(this);
        this.insert=this.insert.bind(this);
        this.remove=this.remove.bind(this);
        this.display=this.display.bind(this);
        this.print=this.print.bind(this)
    }
    find(item) {
        var currNode=this.head; //starting point of linkedlist-which contains the head node
        while(currNode.element!=item){
            currNode=currNode.next;
        }
        return currNode;

    }
    //insert newElement after afterElement
    insert(newElement,afterElement){
        //put element in node to be inserted to linkedlist
        var newnode=new Node(newElement);
        var afterNode=this.find(afterElement);
        var beforeNode=afterNode.next; //store current next node's address in beforeNode variable
        afterNode.next=newnode; //store newnode address in afterNode's next 
        newnode.next=beforeNode; //store beforeNode address in newNode's next property
    }
    remove(item){
        var currNode=this.head;
        while(currNode.next!=null){
            if(currNode.next.element==item){
               var removedNode=currNode.next;
               currNode.next=removedNode.next;
               console.log(`removed: ${item}`)
               break;
            }
            currNode=currNode.next;
        }

    }
    display(){
        var currNode=this.head;
        while(currNode.next!=null){           
            currNode=currNode.next;
            this.print(currNode.element);
        }
    }
    print(value){
        console.log(value);
    }
}
const linkedList=new LinkedList();
linkedList.insert("milk","head");
linkedList.insert("butter","milk");
linkedList.insert("honey","milk");
linkedList.insert("biscuits","butter");
linkedList.insert("oil","milk");
linkedList.display();
linkedList.remove("butter");
linkedList.display();
