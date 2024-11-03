{

    // type alias 

    // Object --->type alias 
type Student ={
    name:string;
    id:number;
    gender:string;
    contactNo?:string;
    address:string;
}

const student1 : Student ={
    name:'setu',
    id:2,
    gender:'female',
    address:'Bangladesh',
}

const student2 :Student ={
    name:'jannat',
    id:2,
    gender:'female',
    contactNo:'013444',
    address:'Bangladesh',
}


    // Array --->type alias 
type UserName =string;
type IsAdmin =boolean;

const userName:UserName ='person';
const isAdmin :IsAdmin=true;


    // Function --->type alias 
type Add =(x:number,y:number)=>number;

const Add:Add=(x,y)=>x+y


}