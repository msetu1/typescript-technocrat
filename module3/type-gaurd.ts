{
    //type guard using typeof and in
// type guard amra chaile function and object eu bebohar korte pari

// typeof----->type guard 
type CommonType = string | number;

const add=(param1:CommonType, param2:CommonType):CommonType=>{
    if(typeof param1 ==='number' && typeof param2 ==='number'){
        return param1+param2;
    }
    else{
        return param1.toString()+param2.toString();
    }
}
const result =add('2',2);
console.log(result)

// in guard 
type NormalUser ={
    name:string;
}
type AdminUser ={
    name:string;
    role:'admin';
}

const getUser=(user:NormalUser|AdminUser)=>{
    if('role' in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    }else{
        console.log(`My name is ${user.name}`)
    }
}
const normalUser:NormalUser ={
    name:'Mr. Normal user'
}
const adminUser:AdminUser ={
    name:'Mr. Normal user',
    role:'admin'
}
getUser(normalUser);
getUser(adminUser);
    // 
}