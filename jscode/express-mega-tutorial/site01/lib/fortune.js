const faker = require('faker');
const fortunes = Array.from({length: 5}, () => faker.lorem.sentence());

exports.getFortune = () => {
    return fortunes[Math.floor(Math.random()*fortunes.length)];
}
