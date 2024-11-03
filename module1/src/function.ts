{
    // learning function 
// 1. Normal function 
// 2.Arrow function

// Normal Function 
function add(x:number,y:number) : number{
    return x+y;
    };
    
    // Arrow Function 
    const addArrow =(x:number,y:number) : number => x+ y;
    
    // Object --->Function---> Method 
    const addObject={
    name:'setu',
    balance: 0,
    addBalance(balance:number): string {
        return `my new Balance is : ${this.balance+balance}`
    }
    }
    
    // array---->map--->sqr value
    const arr : number[]=[3,6,8,10]
    const squareValue : number[]=arr.map((item:number) : number=>item*item);
    
    
}