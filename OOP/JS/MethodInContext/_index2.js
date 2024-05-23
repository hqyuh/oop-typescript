class PersonCl {
    constructor(fullName) {
        this.fullName = fullName;
    }
    getSomeThing() {
        console.log(this.fullName);
    }

    set fullName(name) {
        this._fullName = name;
    }

    get fullName() {
        return this._fullName;
    }
}

const person = new PersonCl('John');
console.log(person.fullName);
console.log(person.__proto__ === PersonCl.prototype);