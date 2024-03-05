const http = require('http')
const express = require('express');
const path = require('path')

const app = express();
const ruskRelay = require('./modules/rusk-relay');

app.use(express.json({limit: '1mb'}))

// APi start
ruskRelay.Start(app)

// Client static files
app.use(express.static(path.join(__dirname, '../client')))
app.use('*', (req, res) => {
  console.log(req)
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

const server = http.createServer(app);

server.listen(80);