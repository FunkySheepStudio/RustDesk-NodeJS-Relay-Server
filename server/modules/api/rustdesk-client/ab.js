function Get(req, res)
{
    console.log("ab")
    console.log(req.body)
    res.end(JSON.stringify({}))
}

module.exports = function (app) {
    app.get('/api/ab', Get)
}