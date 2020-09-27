'use strict';
const engine = require('liquidjs').Liquid;
module.exports = app => {
  const liquid = new engine({
    ...app.config.liquid,
  });

  const coreLogger = app.loggers.coreLogger;
  coreLogger.info('[egg-view-liquid/engine.js] app.config', app.config.liquid);

  liquid.registerTag('__', {
    parse(tagToken, remainTokens) {
      this.str = tagToken.args;
    },
    async render(scope, hash) {
      if (scope.environments && scope.environments.gettext) {
        // for egg.js i18n
        return scope.environments.gettext(this.str);
      }
      return this.str;

    },
  });

  return liquid;
};
