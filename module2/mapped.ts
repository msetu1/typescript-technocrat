{
    //mapped types
const arrOfNumber :number[]=[1,2,3,4]
console.log(arrOfNumber)

const arrOfString :string[]=['a', 'b', 'c', 'd', 'e']
console.log(arrOfString)

const arrayOfString:string[] =arrOfNumber.map(number =>number.toString());
console.log(arrayOfString);


// area ber korar map 
type AreaNumber={
    height:number;
    width:number;
}
type Height =AreaNumber['height'] // look up type
// type AreaString={
//     height:string;
//     width:string;
// }
type AreaString<T>={
    [key in keyof T]:T[key]
}


const area :AreaString<{height:string; width:number}>={
height:'222',
width:22222222
}
console.log(area)
    //
}