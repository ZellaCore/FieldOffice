// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('http://192.168.0.17:15000/api/employee')

    const contentType = store.addContentType({
      typeName: 'Employee',
      route: '/remote_employee/:eid'
    })
    //console.log(data)
    for (const item in data.objects) {
      let path = `/remote_employee/${item.id}`;
      contentType.addNode({
        id: item.id,
        eid: item.eid,
        firstname: item.firstname,
        lastname: item.lastname,
        occupation: item.occupation,
        path,
        fields: {
          body: item.registration
        }
        
      })
    }
    
  })
}
