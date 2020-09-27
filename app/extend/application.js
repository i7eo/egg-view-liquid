'use strict';

const LIQUID = Symbol('app#liquid');
const engine = require('../../lib/engine');

module.exports = {
  get liquid() {
    if (!this[LIQUID]) {
      this[LIQUID] = engine(this);
    }
    return this[LIQUID];
  },
};