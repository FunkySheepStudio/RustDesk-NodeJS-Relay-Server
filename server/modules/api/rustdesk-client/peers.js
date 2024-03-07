let sysinfo = require('./sysinfo');

function Get(req, res)
{
  let newArray = sysinfo.Instances.map((item) => { return {
    id: item.id,
    user_name: item.username,
    info: {
      device_name: item.hostname,
      user_name: item.username
    }
  }})

  res.end(JSON.stringify({
    data: newArray,
    total: newArray.length
}))
}

module.exports = function (app) {
    app.get('/api/peers', Get)
}