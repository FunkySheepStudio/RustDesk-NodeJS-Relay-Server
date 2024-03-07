let Instances = []

function Get(req, res)
{
    res.end(JSON.stringify(Instances))
}

function Post(req, res)
{
    let instance = Instances.find(item => item.id === req.body.id)
    if (instance)
    {
        instance = req.body.id
    } else {
        Instances.push(req.body)
    }
    
    res.end(JSON.stringify({}))
}

module.exports = function (app) {
    app.get('/api/sysinfo', Get)
    app.post('/api/sysinfo', Post)
}