'use strict';

module.exports = app => {
  app.view.use('liquid', require('./lib/view'));
};
