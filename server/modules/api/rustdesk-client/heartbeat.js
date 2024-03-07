let Instances = []

function Get(req, res)
{
    res.end(JSON.stringify(Instances))
}

function Post(req, res)
{
    let itemID = Instances.findIndex(item => item.id === req.body.id) 
    req.body.modified_at = new Date()
    if (itemID >= 0)
    {
        Instances[itemID] = req.body
    } else {
        Instances.push(req.body)
    }
    
    res.end(JSON.stringify({}))
}

module.exports = function (app) {
    app.get('/api/heartbeat', Get)
    app.post('/api/heartbeat', Post)
}