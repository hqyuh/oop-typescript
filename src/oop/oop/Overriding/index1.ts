class PersonO1 {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Teacher extends PersonO1 {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

const teacher = new Teacher("John", "Doe");

console.log(teacher.firstName);
console.log(teacher.lastName);
console.log(teacher.fullName);
