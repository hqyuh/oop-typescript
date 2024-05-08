class Phone {
    print() {
        console.log('Phone');
    }
}

class Laptop {
    print() {
        console.log('Laptop');
    }
}

interface Device {
    print(): void;
}

const printDevice = <T extends Device>(arr: T[]) => {
    for (const element of arr) {
        element.print();
    }
}

printDevice<Device>([new Laptop(), new Laptop(), new Phone()]);

