let Instances = []

function Get(req, res)
{
    res.end(JSON.stringify(Instances))
}

function Post(req, res)
{
    let itemID = Instances.findIndex(item => item.id === req.body.id && item.username === req.body.username)
    req.body.modified_at = new Date()
    if (itemID >= 0)
    {
        Instances[itemID] = req.body
    } else {
        Instances.push(req.body)
    }
    
    res.end(JSON.stringify({}))
}

exports.Instances = Instances
exports.Setup = function (app) {
    app.get('/api/sysinfo', Get)
    app.post('/api/sysinfo', Post)
}