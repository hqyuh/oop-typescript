class User {
    constructor(private username: string) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
    }
}

const james = new User('James');
james.setUsername('hh');
console.log(james.getUsername());