'use strict';

module.exports = class LiquidView {

  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.liquid;
  }

  render(filename, locals, viewOptions) {
    try {
      return this.app.liquid.renderFile(filename, locals);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  renderString(tpl, locals, viewOptions) {
    // should disable cache when no filename
    // const config = Object.assign({}, this.config, viewOptions, {
    //     cache: false
    // });

    try {
      return this.app.liquid.parseAndRender(tpl, locals);
    } catch (err) {
      return Promise.reject(err);
    }
  }

};
