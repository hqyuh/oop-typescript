// Omit<Type, Keys>
// It will get all the keys from a certain Type then remove some unnecessary keys (string or union).

interface Clip {
    id: number;
    title: string;
    completed: boolean;
}

type ClipType = Omit<Clip, 'title'>

const clip: ClipType = {
    id: 1,
    completed: false
}
