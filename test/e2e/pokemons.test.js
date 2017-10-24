const {assert} = require('chai');
const mongoose = require('mongoose').connection;
const request = require('./request');

describe('pokemon CRUD', () => {
    let pokeData = null;

    beforeEach(() => {
        mongoose.dropDatabase();

        pokeData = [
            {
                name: 'Flaaffy',
                weakness: 'ground'
            }
        ];
    });

    describe('POST pokemon', () => {
        it('returns pokemon with new id', () => {
            return request.post('/api/pokemons')
                .send(pokeData[0])
                .then(res => assert.ok(res.body._id));
        });
    });
});