const express = require('express');
const { Kafka } = require('kafkajs');

const routes = require('./routes');

const app = express()

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['kafka:9092']
});

app.use(routes)

const producer = kafka.producer();
const consumer = kafka.consumer();

const run = async () => {
    //Producing
    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Requisição feita' }
        ]

    })

    //Consuming


}

module.exports = run


