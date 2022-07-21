const express = require('express');
const { Kafka } = require('kafkajs');

const routes = require('./routes');

const app = express()

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
});

/** Unlock producer to all routes */

const producer = kafka.producer();

app.use((req, res, next) => {
    req.producer = producer;

    return next();
})

/**
    * Register routes from application
*/

app.use(routes)

//const consumer = kafka.consumer();

const run = async () => {
    //Producing

    await producer.connect()
    /**
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Requisição feita' }
        ]

    })
     */

    //Consuming

    app.listen(3333)

}

run().catch(console.error)



