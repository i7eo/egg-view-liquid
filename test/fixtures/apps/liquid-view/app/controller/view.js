'use strict';

exports.renderWithLocals = function* (ctx) {
  yield ctx.render('locals.liquid', {
    data: 'world',
  });
};

exports.include = function* (ctx) {
  yield ctx.render('layout/layout.liquid');
};

exports.cache = function* (ctx) {
  yield ctx.render('cache.liquid');
};

exports.renderWithHelper = function* (ctx) {
  yield ctx.render('helper.liquid');
};

exports.htmlext = function* (ctx) {
  yield ctx.render('home.html');
};

exports.error = function* (ctx) {
  try {
    yield ctx.render('error.liquid');
  } catch (err) {
    this.body = err.message;
  }
};

exports.renderStringWithData = function* (ctx) {
  ctx.body = yield ctx.renderString('hello {{ data }}', {
    data: 'world',
  });
};

// exports.renderStringWithHelper = function* (ctx) {
//   ctx.body = yield ctx.renderString('hello {{ helper.data() }}');
// };

exports.renderStringError = function* (ctx) {
  try {
    yield ctx.renderString('{% a');
  } catch (err) {
    ctx.body = err.message;
  }
};
