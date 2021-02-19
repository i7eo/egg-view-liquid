# egg-view-liquid

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-liquid.svg
[npm-url]: https://npmjs.org/package/egg-view-liquid

egg view plugin for [liquid].

## :large_blue_circle: 国际化

[English](README.md) | 中文文档

## 安装

```bash
$ npm i egg-view-liquid --save
```

## 使用

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

该文件将被编译和缓存，你可以更改 `config.liquid.cache = false` 禁用缓存，默认情况下在本地环境中是禁用的。

### 文件引入

可以包括相对和绝对文件；相对文件从当前文件路径解析。

```html
// app/view/a.liquid include app/view/b.liquid
{% render 'view/b' %}
```

Absolute file is resolve from `app/view`.

```html
// app/view/home.liquid include app/view/partial/menu.liquid
{% render 'partial/menu' %}
```

## 注意事项:

  1. 当你使用该插件引用其他模版时需要注意引用路径: `partial/xxx` 而不是 `/partial/xxx`

  2. LiquidJs 现在并不支持在文件中直接使用方法调用例如: `Hello {{helper.data()}}` 请用 tag/plugin 代替

  3. 如果你尝到了在 ejs 中 `contentfor` 的甜头, 在 LiquidJs's 中使用 `block` 即可.

## 配置

请查看 [config/config.default.js](config/config.default.js) 获取更多信息。

## 问题&建议

请在这里提交 issue [here](https://github.com/eggjs/egg/issues)。

## :stuck_out_tongue_winking_eye: 关于作者

[i7eo](https://i7eo.com/about/)

## :copyright: 版权信息

[License MIT](LICENSE)

[liquid]: https://github.com/harttle/liquidjs

