{
    // union and intersection types

    // union types 
    type Developer ='Front-end'| 'Back-end';
const frontendDev : Developer ='Back-end';
    console.log(frontendDev);

    type User ={
        name:string;
        email?:string;
        gender:'male'|'female';
        bloodGroup:'O+'|'A+'|'B+';
    }

    const user : User={
        name:'setu',
        gender:'female',
        bloodGroup:'O+',
    }
    console.log(user);


// intersection type 
type FrontEnd={
    skills:string[];
    sector1:'Front End'
}
type BackEnd={
    skills:string[];
    sector2:'Back End'
}

type FullStack=FrontEnd & BackEnd;

const fullStack :FullStack ={
    skills: ['HTML','CSS','Express'],
    sector1:'Front End',
    sector2:'Back End'
}
console.log(fullStack);

}