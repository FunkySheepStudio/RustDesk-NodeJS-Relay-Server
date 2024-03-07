function Post(req, res)
{
  console.log("currentUser")
  console.log(req.body)
  res.end(
    JSON.stringify(
      {
        name: "Anonyme",
        isAdmin: false
      }
    )
  )
}

module.exports = function (app) {
  app.post('/api/currentUser', Post)
}