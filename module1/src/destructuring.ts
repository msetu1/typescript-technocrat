{
// destructuring 
// 1.Object Destructuring 
// 1.Array Destructuring 

// 1.Object Destructuring 
const user={
    id : 20,
name:{
firstName:'Setu',
lastName:'Akther',
},
contact: 'Bangladesh'
}

const {contact,name:{lastName}} =user;


// 1.Array Destructuring 
const myFriends =['a', 'b', 'c', 'd', 'e', 'f'];
const [,,,bestFriend,...rest]=myFriends


}