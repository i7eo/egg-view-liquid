# egg-view-ejs

[![NPM version][npm-image]][npm-url]
[![Travis Status](https://img.shields.io/travis/1021683053/egg-view-art/master.svg?label=travis)](https://www.travis-ci.org/1021683053/egg-view-art)

[npm-image]: https://img.shields.io/npm/v/egg-view-art.svg
[npm-url]: https://npmjs.org/package/egg-view-art

egg view plugin for [ejs].

## Install

```bash
$ npm i egg-view-ejs --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

// {app_root}/config/config.default.js
exports.view = {
  mapping: {
    '.ejs': 'ejs',
  },
};

// ejs config
exports.ejs = {};
```

Create a ejs file

```js
// app/view/hello.ejs
hello <%= data %>
```

Render it

```js
// app/controller/render.js
exports.ejs = async ctx => {
  await ctx.render('hello.ejs', {
    data: 'world',
  });
};
```

The file will be compiled and cached, you can change `config.ejs.cache = false` to disable cache, it's disable in local env by default.

### Include

You can include both relative and absolute file.

Relative file is resolve from current file path.

```html
// app/view/a.ejs include app/view/b.ejs
<% include b.ejs %>
```

Absolute file is resolve from `app/view`.

```html
// app/view/home.ejs include app/view/partial/menu.ejs
<% include /partial/menu.ejs %>
```

### Layout

You can render a view with layout also:

```js
// app/view/layout.ejs

<%- body%>

// app/controller/render.js
exports.ejs = async ctx => {
  const locals = {
    data: 'world',
  };

  const viewOptions = {
    layout: 'layout.ejs'
  };

  await ctx.render('hello.ejs', locals, viewOptions);
};
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

[ejs]: https://github.com/mde/ejs
