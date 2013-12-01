var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = process.env.PORT || 3000,
    db = process.env.;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'gallery0644'
    },
    port: port,
    db: 'mongodb://localhost/gallery0644-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'gallery0644'
    },
    port: port,
    db: 'mongodb://localhost/gallery0644-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'gallery0644'
    },
    port: port,
    db: process.env.MONGOLAB_URI
  }
};

module.exports = config[env];
