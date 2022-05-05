class Set{
    constructor(){
        this.dataStore=[];
        this.add=this.add.bind(this);
        this.remove=this.remove.bind(this);
        this.size=this.size.bind(this);
        this.union=this.union.bind(this);
        this.intersect=this.intersect.bind(this);
        this.subset=this.subset.bind(this);
        this.difference=this.difference.bind(this);
        this.show=this.show.bind(this);
        this.contains=this.contains.bind(this);
    }
    add(data){
        //check if data already exist
        if(this.dataStore.indexOf(data)<0){
            this.dataStore.push(data);
            return true;
        }else{
            return false;
        }

    }
    remove(data){
        const pos=this.dataStore.indexOf(data);
        if(pos>-1){
            this.dataStore.splice(pos,1);
            return true;
        }else{
            return false;
        }
    }
    size(){
        return this.dataStore.length;
    }
    union(set1,set2){
        this.dataStore=set1.dataStore;
        set2.dataStore.map(member=>{
            this.contains(member)
        })

    }
    intersect(set2){
        const interset=[];
        this.dataStore.map(member=>{
            if(set2.dataStore.indexOf(member)>-1){
                interset.push(member);
            }
        })
        return interset;
    }
    subset(){

    }
    difference(){

    }
    show(){
        console.log(this.dataStore)
    }
    contains(data){
        if(this.dataStore.indexOf(data)>-1){
            return true;
        }else{
            this.dataStore.push(data)
        }
    }

}
const set1=new Set();
set1.add(3);
set1.add(4);
set1.add(8);
const set2=new Set();
set2.add(3);
set2.add(12);
set2.add(16)
const set3=new Set();
set3.add(46);
set3.add(50);
const intersetValues=set1.intersect(set2);
console.log(intersetValues);
