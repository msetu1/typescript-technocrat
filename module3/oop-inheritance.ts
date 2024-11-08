{
  // OOP---->Inheritance

  // common types
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  // student
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student = new Student("Mst. Setu Akther", 19, "uttara");
  student.address;

  // teacher
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClasses: number) {
      console.log(`${this.name} will take ${numberOfClasses} `);
    }
  }
  const teacher = new Teacher("Mst. Anna Akther", 18, "uttara", "aaaaaa");
  teacher.designation;

  //
}
