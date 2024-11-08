{
    // promise
const createPromise =():Promise<string>=>{
    return new Promise<string>((resolve,reject)=>{
        const data:string ='I am something'
        if(data){
            resolve(data)
        }
        else{
            reject('failed to load data')
        }
    })
}
// calling create promise function 
const showData = async():Promise<string>=>{
    const data:string = await createPromise();
    console.log(data);
    return data;
}
showData()

const createPromiseBoolean =():Promise<boolean>=>{
    return new Promise<boolean>((resolve,reject)=>{
        const data :boolean=true;
        if(data){
            resolve(data);
        }
        else{
            console.log('something want wrong');
        }
    })

}
const result =async():Promise<boolean>=>{
    const data:boolean = await createPromiseBoolean();
    console.log(data)
    return data;
}
result()


    //
}