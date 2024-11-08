{
    //Utility types
    // Pick

    type Person ={
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }
type NamAge =Pick<Person,'name'|'age'>


// Omit 
type ContactInfo =Omit<Person,'name'|'age'>

//Required 
type PersonRequired =Required<Person>
    

//Partial sob ghulo ke optional kore dibe
type PersonPartial =Partial<Person>

//Readonly ----> not change
type PersonReadonly =Readonly<Person>
const person1 :PersonReadonly={
    name: 'John',
    age:33,
    contactNo:'017'
}
const person2 :Person={
    name: 'John',
    age:33,
    contactNo:'017'
}
// person1.name='mr.x'

//Record
type MyObj=Record<string,string>

const obj1:MyObj={
    a:'aa',
    b:'bb',
    c:'cc',
    d:'dd',
}
console.log(obj1);

}