function Get(req, res)
{
  console.log("peers")
  console.log(req.body)
  res.end(JSON.stringify({
    data: [
        {
          id: "My ID super cracky",
        }
    ],
    total: 1
}))
}

module.exports = function (app) {
    app.get('/api/peers', Get)
}