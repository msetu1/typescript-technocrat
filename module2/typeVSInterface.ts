{
    // interface  and type alias 

    // type alias of objects
    type Student1 ={
        name:string;
        id:number;
    } 
    type StudentExtends1 = Student1 & {institute:string;};
    const student1 : StudentExtends1={
        name:'setu',
        id:2,
        institute:'Shyamoli Ideal Polytechnic Institute',
    }
    console.log(student1);


    // interface using for Objects 
    interface Student2 {
        name:string;
        id:number;
    }
    interface StudentExpends2 extends Student2{institute:string;}

    const student2 : StudentExpends2 = {
        name:'anna',
        id:3,
        institute:"Shyamoli Ideal Polytechnic Institute",
    }
    console.log(student2);

    // array of type alias
    type  Arr1 =number[];
    const arr1 :Arr1 =[1,2,7,9];
    console.log(arr1);

    // array of interface 
    interface Arr2 {
        [index:number]:number;
    }
    const arr : Arr2 =[1,3,4,67]
    console.log(arr);

// function of type alias
type Add1 =(x:number, y:number)=>number;
const add1 :Add1=(x,y)=>x+y;
console.log(add1(10,10));

    // function of interface 
    interface Add2 {
        (x:number,y:number):number;
    } 
    const add2 :Add2 =(x,y)=>x+y;
    console.log(add2(5,5));

}