/**@Dotenv */
require('dotenv').config();

/**@Imports */
const { App, Listen } = require('./App');

async function main() {
    const app = App();

    app.then(async function Port() {
        await Listen(port);
        console.log(`Connected at ${port}`);
    })

    // Port Access
    const port = 5000;
}

main();
