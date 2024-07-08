// example decorator
// includes target, propertyName, description
function exampleDecorator(target: any, propertyName: string, description: PropertyDescriptor) {
    console.log(target)
    console.log(propertyName)
    console.log(description);
}
//----------------------------------------------------------------//


@classDecorator
class Boat {

    @altDecorator
    color: string = 'red';

    @altDecorator
    hello(): string {
        return 'hello';
    }

    run(
        @parameterDecorator speed: string,
    ): void {
        console.log('speed => ', speed);
    }

    @logError("Something bad!")
    run1(): void {
        throw new Error();
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

function altDecorator(target: any, propertyName: string) {
    console.log(propertyName);
}

function parameterDecorator(target: any, propertyName: string, index: number) {
    console.log(propertyName, index);
}

function logError(err: string) {
    return function(target: any, propertyName: string, description: PropertyDescriptor) {
        const method = description.value;

        description.value = function ()  {
            try {
                method();
            } catch (error) {
                console.error(err);
            }
        }
    }
}


// logError will be run at here
const boat = new Boat();
boat.run1();