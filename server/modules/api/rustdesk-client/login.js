const LdapClient = require('../../ldap')
const LdapAuth = require('../../ldap/auth')

function Post(req, res)
{   console.log(req.body)
    // Get the LDAP connected user
    let ldapClient = LdapClient()
    const searchDN = 'dc=ra-cci,dc=local'
    const opts = {
      filter: '(samAccountName=' + req.body.username + ')',
      scope: 'sub',
      attributes: ['objectGUID', 'distinguishedName', 'mail', 'sn', 'givenName', 'cn', 'thumbnailPhoto', 'title', 'company', 'department', 'ipPhone', 'mobile', 'mail', 'msDS-UserPasswordExpiryTimeComputed']
    };

    ldapClient.search(searchDN, opts, (error, response) => {
      let obj = {}
      let objGUID = ''

      response.on('searchEntry', (entry) => {
          obj = ldapClient.convert(entry)
          objGUID = ldapClient.GetObjectGUID(obj.objectGUID)
      });

      response.on('end', async (result) => {
        let isAuthOk = await LdapAuth(obj.distinguishedName, req.body.password)
        if (isAuthOk)
        {
          res.end(JSON.stringify({
              type: 'access_token',
              access_token: 'token',
              user: {
                "name": obj.cn
              }
            }
          ))
        } else {
          res.end(
            JSON.stringify({
              error: "Login ou mot de passe incorrect"
            })
          )
        }

        ldapClient.destroy()
      });
    });
    //req.body.password
    //req.body.id conneciton id
    //req.body.uuid app id
    //req.body.autoLogin
    //req.body.type
    //req.body.deviceInfo
}

module.exports = function (app) {
    app.post('/api/login', Post)
}