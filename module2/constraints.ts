{
    //constraints
const addStudents =<T extends {id:number;name:string;email:string}>(student:T)=>{
    const course ='ssssssssssss'
    return{
    ...student,
    course
    }
}
const result =addStudents<{
    id: number;
    name: string;
    email: string;
    devType:string
}>({
    name:'setu',
    id:1,
    email:'setu@gmail.com',
    devType:'ssssss'
})
console.log(result)

    //
}