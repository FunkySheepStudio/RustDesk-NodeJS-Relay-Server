function Post(req, res)
{
    console.log("login")
    console.log(req.body)

    res.end(JSON.stringify({
        type: 'access_token',
        access_token: 'token',
        user: {
          "name": "jarde"
        }
      }))
}

module.exports = function (app) {
    app.post('/api/login', Post)
}