const http = require('http')
const express = require('express');
const path = require('path')

const app = express();
app.use(express.json({limit: '1mb'}))

// APi start
const ruskRelay = require('./modules/api/rustdesk-client');
ruskRelay.Start(app)

// Client static files
app.use(express.static(path.join(__dirname, '../client')))
app.use('*', (req, res) => {
  if (req.originalUrl.startsWith('/api'))
  {
    console.log('Unidentified endpoint: ' + req.originalUrl)
  }
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

const server = http.createServer(app);

server.listen(80);