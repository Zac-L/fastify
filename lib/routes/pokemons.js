
// TODO: fastify cannot use router like this, will have to dive into the docs more tomorrow
const router = require('fastify').Router();
const Pokemon = require('../models/Pokemon');

router
    .post('/', (request, reply) => {
        new Pokemon(reply.body)
            .save()
            .then(mongoRes => reply.send(mongoRes));
    });

module.exports = router;