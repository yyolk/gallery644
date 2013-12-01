var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'gallery0644'
    },
    port: 3000,
    db: 'mongodb://localhost/gallery0644-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'gallery0644'
    },
    port: 3000,
    db: 'mongodb://localhost/gallery0644-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'gallery0644'
    },
    port: 3000,
    db: 'mongodb://localhost/gallery0644-production'
  }
};

module.exports = config[env];
