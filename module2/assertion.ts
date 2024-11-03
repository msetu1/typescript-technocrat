{
    // type assertion 

    const kgToGram =(value: string | number) : string | number | undefined =>{
 
        if(typeof value === 'string'){
            const converted =parseFloat(value)*1000;
            return `The converted is ${converted}`;
        }
        else if(typeof value === 'number'){
            return value * 1000;
        }
        else{
            return `something is wrong`
        }



    }
    const result1 =kgToGram('500') as string;
    const result2 =kgToGram(500) as number;
    console.log(result1, result2);

}