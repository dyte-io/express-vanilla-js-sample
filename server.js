const express = require('express');
const path = require('path');
const axios = require('axios');

require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;
const orgId = process.env.DYTE_ORG_ID
const apiKey = process.env.DYTE_API_KEY;
const authorization = `Basic ${Buffer.from(`${orgId}:${apiKey}`).toString('base64')}`;
const DYTE_API_BASE = 'https://api.cluster.dyte.in/v2';

if (!orgId && !apiKey) {
    console.error(`Failed to start server

    Please add DYTE_ORG_ID and DYTE_API_KEY to env
    you can get these details from https://dev.dyte.io/apikeys
    `);
    return;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/api/create-meeting', async function (req, res) {
    const apiResponse = await axios.request({
        url: `${DYTE_API_BASE}/meetings`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: authorization
        },
        data: {
            title: req.body.title,
            preferred_region: 'ap-south-1',
            record_on_start: false,
            live_stream_on_start: false
        }
    })
    res.send(apiResponse.data.data);
});

app.post('/api/add-participant', async function (req, res) {
    const apiResponse = await axios.request({
        url: `${DYTE_API_BASE}/meetings/${req.body.meetingId}/participants`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: authorization
        },
        data: {
            name: req.body.name,
            picture: `https://www.gravatar.com/avatar/${req.body.email}?s=64&d=identicon&r=PG`,
            preset_name: 'group_call_participant',
            custom_participant_id: req.body.email,
        }
    })
    res.send(apiResponse.data.data);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);