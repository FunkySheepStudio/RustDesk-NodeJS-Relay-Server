function Get(req, res)
{
    console.log("login-options")
    console.log(req.body)
    res.end(JSON.stringify([]))
}

module.exports = function (app) {
    app.get('/api/login-options', Get)
}