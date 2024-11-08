{
    // generic constraints keyof
type Vehicle ={
    bike:string;
    car:string;
    ship:string;
}

type Person1 ='bike'| 'car'| 'ship' // manually
type Person2 =keyof Vehicle

// const person : Person2 = {
//     bike:'a',
//     car:'b',
//     ship:'c',
// }
// console.log(person);

const getProperty=<X,Y extends keyof X>(obj:X,key:Y)=>{
return obj[key];

}
const user ={
    name:'mr.x',
    age:27,
    address:'ctg',
}

const car ={
    model:'fff',
    year:300
}

const result= getProperty(user,'address');
const result2= getProperty(car,'year');
console.log(result,result2);



// user['address']

    //
}