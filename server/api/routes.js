const express = require('express');

const routes = express.Router();

routes.post('/certifications', async (req, res) => {
    console.log(req.producer)
    return res.json({ ok: true })
})


module.exports = routes;