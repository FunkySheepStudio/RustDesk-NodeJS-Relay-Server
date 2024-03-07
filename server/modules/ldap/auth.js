const ldap = require('ldapjs');

module.exports = (userDn, password) => {
    let ldapClient = ldap.createClient({
        url: ['ldaps://ra-cci.local:636/OU=FIRA,DC=RA-CCI,DC=local'],
        tlsOptions: {
          requestCert: false,
          rejectUnauthorized: false
        }
    })

    ldapClient.on('error', (err) => {
        console.error(err);
    });
      
    ldapClient.on('connectError', (err) => {
        console.log(err)
    })

    let authPromise = new Promise((resolve, reject) => {
      ldapClient.bind(
        userDn,
        password,
        (err) => {
          ldapClient.destroy()
          if (err)
          {
            reject()
          } else {
            resolve()
          }
        }
      )
    })

    return authPromise
    .then(() => {
      return true
    })
    .catch(() => {
      return false
    })
}