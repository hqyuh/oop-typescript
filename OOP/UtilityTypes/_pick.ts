// Pick<Type, Keys>
// pick means to select the desired keys from a certain Type

interface Job {
    id: number;
    name: string;
}

type jobDescription = Pick<Job, 'name'>

const job: jobDescription = {
    name: 'Fizz'
}

