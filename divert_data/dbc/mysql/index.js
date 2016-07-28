var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var debug = require('debug')('picbling-controller-sequelize');
var _ = require('lodash');
var co = require('co');
var isReady = false;
var sequelizeCache = {};


module.exports = function () {
    if (isReady) {
        module.exports = sequelizeCache;
        return;
    }
    isReady = true;
    var client = new Sequelize('misty', 'root', '123456', {
        pool: {maxConnections: 5, maxIdleTime: 30},
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: "mysql",
        port: 3306
    });
    var models = {};

    client.sync().then(function (value) {
        debug('mysql table init success');
    }).catch(function (err) {
        debug('err', err);
    });

    fs
        .readdirSync(path.join(__dirname, '/models'))
        .filter(function (file) {
            return (file.indexOf('.') !== 0) && (file !== 'index.js');
        })
        .forEach(function (file) {
            debug(file);
            debug(path.join(__dirname, '/models', file));
            var model = client.import(path.join(__dirname, '/models', file));
            debug('model -', model);
            models[model.name] = model;
        });
    debug('sss ');
    sequelizeCache = _.clone(models);
    sequelizeCache.client = client;
    return sequelizeCache;
};
