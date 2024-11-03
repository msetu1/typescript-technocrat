{
    // generic ba reuseable 
    type GenericArray<T> = Array<T>;

    // generic---> array of string 
    const isString : GenericArray<string> =['halima','shanta','anna']
    console.log(isString);

    // generic -->array of number 
    const inNumber :GenericArray<number> =[13,16,19]
    console.log(inNumber);

// generic --->boolean 
const inBoolean : GenericArray<boolean> =[true,false,false]
console.log(inBoolean);

// generic ---->Object 
const isObject :GenericArray<{name:string,age:number}>=[
    {
name:'Halima',
age: 13,
    },
    {
        name:'Shanta',
        age: 16,
    },
    {
        name:'Setu',
        age: 19,
    }
]
console.log(isObject);

// generic ----> tuple array
type GenericTuple<X,Y> = [X,Y];
const friendsName :GenericTuple<string,string>=['a','b']
console.log(friendsName);


const user : GenericTuple<string,number> =['setu',19];
console.log(user);

const group : GenericTuple<number,{name:string,married:boolean}> =[
    19,{name:'setu',married:true}
]

console.log(group);


}