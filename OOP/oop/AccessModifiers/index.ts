// access modifiers
// private    ==> only access inside class
// protected  ==> only access within that class and within the derived class (subclass)
// public     ==> access from any location

class Employee {
  constructor(
    public name: string,
    protected code: number,
  ) {
    this.name = name;
    this.code = code;
  }
}

class SalesEmployee extends Employee {
  constructor(
    name: string,
    code: number,
    private readonly department: string,
  ) {
    super(name, code);
    this.department = department;
  }

  getName(): number {
    return this.code;
  }

  getDepartment(): string {
    return this.department;
  }
}

const emp = new Employee("H", 11);
const emp1 = new SalesEmployee("John Smith", 123, "Sales");

console.log(emp1.getDepartment());
