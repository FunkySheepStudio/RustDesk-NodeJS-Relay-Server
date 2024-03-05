exports.Start = (app) => {
    require('./api/login-options')(app)
    require('./api/login')(app)
    require('./api/ab')(app)
    require('./api/users')(app)
    require('./api/currentUser')(app)
    require('./api/peers')(app)
    console.log("Rusk relay started")
}