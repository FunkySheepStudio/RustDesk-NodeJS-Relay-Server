exports.Start = (app) => {
    require('./login-options')(app)
    require('./login')(app)
    require('./ab')(app)
    require('./users')(app)
    require('./currentUser')(app)
    require('./peers')(app)
    require('./heartbeat')(app)
    require('./sysinfo')(app)
    console.log("Rusk relay started")
}