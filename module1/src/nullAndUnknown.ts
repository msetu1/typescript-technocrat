{
    // nullable and unknown type 
    // nullable types 
    // const searchName =(value:string|null)=>{
    //     if(value){
    //         console.log('Searching');
    //     }
    //     else{
    //         console.log('There is nothing to search');
    //     }
    // }

    // searchName(null);

    // unknown type 
    const getMiterPerSecond =(value:unknown)=>{
        if(typeof value==="number"){
            const covert =(value*1000)/3600;
            console.log(`the type ${covert}ms^-1`);
        }
        else if(typeof value==="string"){
            const [miter,unit]=value.split(' ');
            const covert =(parseFloat(miter)*1000)/3600;
            console.log(`the type ${covert}ms^-1`);
        }
        else{
            console.log('it is wrong number');
        }

    }
    getMiterPerSecond(1000)




    // never 
    const throwError=(msg:string) : never=>{
        throw new Error(msg);
    }
    throwError('It is wrong')
}