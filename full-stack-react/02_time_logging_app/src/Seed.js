import {lorem} from 'faker';
import {v4 as uuidv4} from 'uuid';

function generateTimers(size) {
    size = size || 10;

    return [...Array(size).keys()].map((i) => (
    {
        id: uuidv4(),
        title: lorem.sentence(),
        project: lorem.sentence(),
        elapsed: Math.floor(Math.random() * 10000000),
        runningSince:null,
        editFormOpen: (Math.floor(Math.random() * 10) % 2 === 1)
    }
    )).map((obj) => Object.assign({}, obj, {key: obj.id}));
}

const Seed = {
    timers: generateTimers()
}

export default Seed;
