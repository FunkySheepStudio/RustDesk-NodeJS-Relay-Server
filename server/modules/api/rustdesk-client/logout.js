function Get(req, res)
{
}

function Post(req, res)
{
    console.log(req.body)
    
    res.end(JSON.stringify({}))
}

module.exports = function (app) {
    app.get('/api/logout', Get)
    app.post('/api/logout', Post)
}