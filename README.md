# egg-view-liquid

[![NPM version][npm-image]][npm-url]
[![Travis Status](https://img.shields.io/travis/1021683053/egg-view-art/master.svg?label=travis)](https://www.travis-ci.org/1021683053/egg-view-art)

[npm-image]: https://img.shields.io/npm/v/egg-view-art.svg
[npm-url]: https://npmjs.org/package/egg-view-art

egg view plugin for [liquid].

## Install

```bash
$ npm i egg-view-liquid --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.liquid = {
  enable: true,
  package: 'egg-view-liquid',
};

// {app_root}/config/config.default.js
exports.view = {
  mapping: {
    '.liquid': 'liquid',
  },
};

// liquid config
exports.liquid = {};
```

Create a liquid file

```js
// app/view/hello.liquid
hello {{ data }}
```

Render it

```js
// app/controller/render.js
exports.liquid = async ctx => {
  await ctx.render('hello.liquid', {
    data: 'world',
  });
};
```

The file will be compiled and cached, you can change `config.liquid.cache = false` to disable cache, it's disable in local env by default.

### Include

You can include both relative and absolute file.

Relative file is resolve from current file path.

```html
// app/view/a.liquid include app/view/b.liquid
{% render 'view/b' %}
```

Absolute file is resolve from `app/view`.

```html
// app/view/home.liquid include app/view/partial/menu.liquid
{% render 'partial/menu' %}
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

[liquid]: https://github.com/harttle/liquidjs


tips:

引入文件时直接 partial/hello [路径名/文件名]

liquid 目前不支持在文件中直接使用方法调用：hello {{ helper.data() }}如有需要可使用标签或者插件代替
