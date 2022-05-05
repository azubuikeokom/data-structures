class Dictionary{
    constructor(){
        this.dataStore=new Array();
        this.add=this.add.bind(this)
        this.find=this.find.bind(this)
        this.remove=this.remove.bind(this)
        this.showAll=this.showAll.bind(this)
        this.print=this.print.bind(this)
    }
    add(key,value){
        this.dataStore[key]=value;
    }
    find(key){
        return this.dataStore[key]
    }
    remove(key){
        delete this.dataStore[key]
    }
    showAll(){
        for (var key in this.dataStore){
            this.print(`key ${key} : value ${this.dataStore[key]}`)
        }
    }
    print(value){
        console.log(value)
    }
}
var gradeBook=new Dictionary();
gradeBook.add("mike","1st");
gradeBook.add("peter","3rd");
gradeBook.add("philip","2nd");
gradeBook.showAll();
gradeBook.remove("mike");
gradeBook.showAll();