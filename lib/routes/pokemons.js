const router = require('fastify').Router();
const Pokemon = require('../models/Pokemon');

router
    .post('/', (request, reply) => {
        new Pokemon(reply.body)
            .save()
            .then(mongoRes => reply.send(mongoRes));
    });

module.exports = router;