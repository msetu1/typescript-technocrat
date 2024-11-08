{
  // class and objects
  class Animals {
    // properties
    constructor(public name: string, public howMany: number) {}
    // method
    makeAll() {
      console.log(`the animal is ${this.name} and it is ${this.howMany}`);
    }
  }
  // call and instance
  const doc = new Animals("dog is dangerous", 3);
  doc.makeAll();
  doc.name;

  //
}
