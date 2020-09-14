'use strict';

const path = require('path');

module.exports = appInfo => {
    return {
        liquid: {
            root: path.join(appInfo.baseDir, 'app/view'),
            cache: true,
            extname: '.liquid',
        }
    };
};