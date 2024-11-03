{
    // Ternary and Optional Chaining 
    const age:number=14;
    if(age>=18){
        console.log('adult');
    }
    else{
        console.log('not adult');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({isAdult});


    // nullish coalescing operator 
// null / undefined ---> decision making 

const isAuth =null;
const result =isAuth ?? 'guest';
console.log({result});

// Optional Chaining 
type User={
    name:string;
    address:{
        city:string;
        road ? :string;
        permanent:string;
    }
}

const user :User={
    name:'setu',
    address:{
        city:'ctg',
        permanent:'Uttara'
    }
}

const permanentAddress=user?.address?.permanent ?? 'no permanents'
console.log({permanentAddress});

}