const express = require('express');

const routes = express.Router();

routes.post('/certifications', async (req, res) => {
    const message = {
        status: 'success',
    }

    await req.producer.send({
        topic: 'issue-certificate',
        messasges: [
            { value: JSON.stringify(message) },
        ],
    })

    return res.json({
        ok: true
    })
})




module.exports = routes;