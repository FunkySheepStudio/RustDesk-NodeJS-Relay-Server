const ldap = require('ldapjs');
const options = require('../../../options.json')

module.exports = () => {
    ldapClient = ldap.createClient({
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

    ldapClient.bind(
        options.ldapUserDn,
        options.ldapUserPassword,
        (err) => {
            if (err)
                console.log(err);
    });

    ldapClient.GetObjectGUID = (objBuffer) =>
    {
      let strGuidHex = objBuffer.toString('hex')
      return strGuidHex
    }
    
    ldapClient.convert = (entry) => {
        var obj = {
          dn: entry.dn.toString(),
          controls: []
        };
        entry.attributes.forEach(function (a) {
          var buf = a.buffers;
          var val = a.values;
          var item;
          if ( a.type == 'thumbnailPhoto' ||  a.type == 'objectGUID' )
            item = buf;
          else
            item = val;
          if (item && item.length) {
            if (item.length > 1) {
              obj[a.type] = item.slice();
            } else {
              obj[a.type] = item[0];
            }
          } else {
            obj[a.type] = [];
          }
        });
        entry.controls.forEach(function (element, index, array) {
          obj.controls.push(element.json);
        });
        return obj;
    }

    return ldapClient
}