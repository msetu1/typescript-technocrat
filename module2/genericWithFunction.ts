{
    // generic -------->Function
const createArray =(param:string) :string[] =>{
    return [param]
}
const createArrayGeneric =<T>(param:T) :T[] =>{
    return [param]
}

type User ={
    name:string;
    id:number;
}

const result =createArrayGeneric<string>('bbbb');
const result1 =createArrayGeneric<User>({
    name:'dddd',
    id:2
});
console.log(result,result1)
console.log(createArray('my love'));


// generic function tuple 
const createGenericTupleFUnction=<T,X>(param1:T,param2:X):[T,X]=>{
return [param1, param2];
}

const tupleResult=createGenericTupleFUnction<string,number>('MST SETU AKTHER',12);
console.log(tupleResult);


}