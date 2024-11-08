{
  ///
  // type guard ---> instanceof guard
  class CommonType {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("Its bad sound");
    }
  }

  class Dog extends CommonType {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("Its dangerous dog");
    }
  }

  class Cat extends CommonType {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log("Its good cat");
    }
  }

  // normal way
  // instanceof
  const getAnimal = (animal: CommonType) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } 
    else if (animal instanceof Cat) {
      animal.makeMew();
    } 
    else {
      animal.makeSound();
    }
  };

  // Smart way
  // instanceof
  const isDog =(animal:CommonType):animal is Dog=>{
    return animal instanceof Dog;
  }
  const isCat =(animal:CommonType):animal is Cat=>{
    return animal instanceof Cat;
  }
  const getIsAnimal=(animal:CommonType)=>{
    if(isDog(animal)){
        animal.makeBark();
    }
    else if(isCat(animal)){
        animal.makeMew()
    }
    else{
        animal.makeSound()
    }
  }


  // call
  const dog = new Dog("Dog mama", "dog");
  const cat = new Cat("Cat ancle", "cat");
//   getAnimal(cat);
//   getAnimal(dog);
  getIsAnimal(cat)

  ///
}
