const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'certificate',
    brokers: ['localhost:9092']
});

const topic = 'issue-certificate';
const consumer = kafka.consumer();

async function run() {
    await consumer.connect()
    await consumer.subscribe({
        groupId: 'certificate-group'
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

run().catch(console.error)



