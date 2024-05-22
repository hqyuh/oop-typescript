class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

const teacher = new Teacher("John", "Doe");

console.log(teacher.firstName);
console.log(teacher.lastName);
console.log(teacher.fullName);
