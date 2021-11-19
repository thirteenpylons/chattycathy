const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./helpers/formatDate')
const {
    getActiveUser,
    exitRoom,
    newUser,
    getIndividualRoomUsers
} = require('./helpers/userHelper');

const app = express();
const PORT = 3000 || process.env.PORT


app.listen(PORT, () => console.log(`App is live on port ${PORT}`))
app.use(express.static(path.join(__dirname, 'public')))