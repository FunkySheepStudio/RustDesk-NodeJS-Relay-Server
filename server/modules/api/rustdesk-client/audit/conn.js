let Instances = Array.apply(null, {length: 100})
let currentIndex = 0

function Get(req, res)
{
    res.end(JSON.stringify(Instances))
}

function Post(req, res)
{
    if (currentIndex === 100)
        currentIndex = 0

    req.body.time = new Date()
    Instances[currentIndex] = req.body
    currentIndex +=1

    res.end(JSON.stringify({}))
}

module.exports = function (app) {
    app.get('/api/audit/conn', Get)
    app.post('/api/audit/conn', Post)
}