// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');



module.exports = {
  siteName: 'VrstanFO',
  siteDescription: 'Vrstan Field Office Manager for Project management while away from the office ',
  host: '0.0.0.0',
  port:15002,
  plugins: [
      {
        use: 'gridsome-plugin-tailwindcss',
        options: {
          config: './tailwind.config.js'
        }        
      },
      {
        use: '@gridsome/source-faker',
        options: {
          numNodes: 100
        }
      },
      {
        use: path.resolve('./src/plugins/employee'),
        options: {
          numNodes: 50
        }
      }

    ]
  }
