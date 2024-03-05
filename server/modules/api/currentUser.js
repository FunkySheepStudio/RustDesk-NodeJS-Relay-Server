function Post(req, res)
{
  console.log("currentUser")
  res.end(
    JSON.stringify(
      {
        name: "Sébastien JARDE",
        isAdmin: false
      }
    )
  )
}

module.exports = function (app) {
  app.post('/api/currentUser', Post)
}