'use strict';

const engine = require('liquidjs').Liquid;
const liquid = new engine({
    // root: path.join(appInfo.baseDir, 'app/view'),
    // cache: true,
    // extname: '.liquid',
});

module.exports = class LiquidView {

    constructor(ctx) {
        this.ctx = ctx;
        this.app = ctx.app;
        this.config = ctx.app.config.liquid;
    }

    render(filename, locals, viewOptions) {
        const config = Object.assign({}, this.config, viewOptions, {
            filename,
        });

        try {
            return liquid.renderFile(filename, locals, config);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    renderString(tpl, locals, viewOptions) {
        // should disable cache when no filename
        const config = Object.assign({}, this.config, viewOptions, {
            cache: false
        });

        try {
            return liquid.parseAndRender(tpl, locals, config);
        } catch (err) {
            return Promise.reject(err);
        }
    }

};