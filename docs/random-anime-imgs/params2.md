---
outline: deep
---
# v2 说明文档

v2 的图片经过本人在 pixiv 的收藏转换而来，只存储图片元数据，本 API 仅储存了作品的基本信息，不提供图片的代理或储存服务。不存在自动爬取等敷衍的操作。
目前暂时包含 `16534` 张图片。

## 请求链接

[https://moe.starfishdl.site/api/setu/v2](https://moe.starfishdl.site/api/setu/v2)

## 请求方法

`GET`

## 请求参数

| 参数名 | 类型         | 默认值          | 说明                                                                                                                        |
| ------ | ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| proxy  | `string`   | `i.pixiv.re`  | [查看下文](#jump1)                                                                                                             |
| size   | `enum`     | `original`    | 返回图片大小，由上到下逐步减小<br />`original: 原图`<br />`regular: 常规图`<br />`small: 小图`<br />`thumb: 缩略图` |
| r18    | `boolean`  | `false: 随机` | 是否返回 r-18 数据<br />`false: 随机`<br />`true: 是`                                                                  |
| tags   | `string[]` | `undefind`    | [查看下文](#jump2)                                                                                                             |

## 参数说明

<span id="jump1" />

### `proxy`

由于P站资源域名 `i.pximg.net`具有防盗链措施，不含 `www.pixiv.net` referrer 的请求均会 403，所以如果需要直接在网页上展示或在客户端上直接下载必须依靠反代服务。

* 可以通过设置 `0` 或者 `null` 来获得图片的原始地址。
* 当不指定协议时，会自动补充 `https://`

以下两种方法等价：

```html
https://i.pixiv.re
i.pixiv.re
```

<span id="jump2" />

### `tags`

指定不超过 4 个 Tag，作为数组传上去。
数组强制指定为 `AND` 逻辑，查找的元素为包含了上传上来所有 Tag 的元素。所以不要指定太多，不然可能找不到。
需要将数组先转化为 string 再上传。你可以使用 `JSON.stringify()` 来实现这一目标。

这里举个例子：

```html
`['666', '777']`
"[\"777,\", \"888\"]"
```
