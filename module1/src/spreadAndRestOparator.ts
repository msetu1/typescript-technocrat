{
    // spread operator 
// rest operator 
// destructuring 

// spread operator 
// array 
const friends1 :string[] =['jannat','fatema'];
const friends2 :string[] =['mawa','Halima'];

friends1.push(...friends2);

// object 
const laptop ={
    name:'Laptop',
    processor: '15-1135G7',
    model : 'Inspiron 1135',
    brand:'DELL',
    color:'silver'
}
const phone ={
name:'iPhone',
version:'16pro max',
brand: 'Apple',
color:'black'
}

const deviceList ={
    ...laptop,
    ...phone
}
console.log(deviceList);

// rest operator 
const greetFriends=(...friends: string[])=>{
    friends.forEach((friend:string)=>console.log(`Hi ${friend}`));
}
greetFriends('a','b','c','d','e','f');
}

