const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const meetupModal = require('./meetup_schema')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/meetups', async (req, res) => {
    try {
        const allMeetups = await meetupModal.find({});
        res.json({ allMeetups: allMeetups })
    } catch (err) {
        res.json(err);
    }
})
app.post('/meetup', async (req, res) => {
    try {
        const meetup = new meetupModal(req.body);
        await meetup.save();
        res.json({ message: 'meetup saved successfully!' })
    } catch (err) {
        res.json(err);
    }
})
mongoose.connect('mongodb://127.0.0.1:27017/meetupDB').then(
    () => {
        console.log("Connected to DB!");
    },
    err => {
        console.log(err);
    }
);
app.listen(8000, (err) => {
    if (err) {
        console.log('Error', err);
        process.exit(1)
    } else {
        console.log('server running on the port 8000')
    }
})