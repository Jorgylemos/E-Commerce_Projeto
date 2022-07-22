const express = require('express');
const { Kafka } = require('kafkajs');

const routes = require('./routes');

const app = express()

const kafka = new Kafka({
    clientId: 'certificate',
    brokers: ['localhost:9092']
});

const topic = 'issue-certificate';
const consumer = kafka.consumer();


async function run() {
    await consumer.connect()
    await consumer.subscribe({
        topic
    })
    await consumer.run({
        eachMessage: async ({
            topic, partition, message
        }) => {
            const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
            console.log(`- ${prefix} ${message.key}#${message.value}`);
        }
    })
}

/** Unlock producer to all routes */

const producer = kafka.producer();

app.use((req, res, next) => {
    req.producer = producer;

    return next();
})

/**
    * Register routes from application
*/
run().catch(console.error)



