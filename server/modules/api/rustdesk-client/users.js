function Get(req, res)
{
    console.log("users")
    console.log(req.body)
    res.end(JSON.stringify({
        data: [
            {
                name: "SJARDE.69R",
                isAdmin: false
            }
        ],
        total: 1
    }))
}

module.exports = function (app) {
    app.get('/api/users', Get)
}