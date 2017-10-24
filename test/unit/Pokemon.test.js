const {assert} = require('chai');
const Pokemon = require('../../lib/models/Pokemon');

describe('Pokemon Model', () => {
    let pokeData = null;

    beforeEach(() => pokeData = {
        name: 'Flaaffy',
        weakness: 'ground'
    });

    it('Vaild Model', () => {
        const flaaffy = new Pokemon(pokeData);

        assert.ok(!flaaffy.validateSync());
        assert.ok(flaaffy.name);
    });
});