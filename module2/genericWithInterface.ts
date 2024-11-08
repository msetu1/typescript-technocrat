{
    // generic-------> interface 
interface Developer<T,X=null> {
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number;
    }
    smartWatch:T ;
    bike?:X;
}

interface PoorMan {
    brand:string;
    model:string;
    display:string;
}

const poorDeveloper: Developer<PoorMan>={
    name:'setu',
    computer:{
        brand:'ASUS',
        model:'sdfffff',
        releaseYear:2013,
    },
    smartWatch:{
    brand:'Emailab',
    model:'dfffff',
    display:'OELD'
    }
}
console.log(poorDeveloper);

interface RichMan {
    brand:string;
    model:string;
    heartTrack:boolean;
    sleepTrack:boolean;

}

interface Bike{
        model:string;
        engineCape:string
}

const richDeveloper: Developer<RichMan,Bike>={
    name:'anna',
    computer:{
        brand:'DELL',
        model:'sdaaaaaaa',
        releaseYear:2014,
    },
    smartWatch:{
    brand:'apple',
    model:'dfffff',
    heartTrack:true,
    sleepTrack:true
    },
    bike:{
        model:'aaaaa',
        engineCape:'fffff'
    }
}

console.log(richDeveloper);

}