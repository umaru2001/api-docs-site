---
outline: deep
---
# v1 说明文档

v1 返回的图片是我自己存储的，里面所有的图片都做了优化，只会下发 `WebP` 格式的图片。
图片大小和原图 `original` 保持一致，但是大小和 `small` 相仿。
访问速度应该优于 v2。但是 v1 存在访问较多访问限额。
图源没有 v2 丰富。

## 请求链接

[https://moe.starfishdl.site/api/setu/v1](https://moe.starfishdl.site/api/setu/v1)

## 请求方法

`GET`

## 请求参数

注意，部分查询存在查询优化，会添加在参数内，使用这种范式查询，会优化查询速度，拥有更多的请求次数。
未被优化的参数，则存在更为严格的访问限制。

| 参数名    | 类型   | 默认值         | 举例                                                                                                    | 说明                                                 |
| --------- | ------ | -------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| landscape | 0 or 1 | -：随机返回    | [https://moe.starfishdl.site/api/setu/v1?landscape=1](https://moe.starfishdl.site/api/setu/v1?landscape=1) | 图片是横图还是竖图<br />`0: 竖图`<br />`1: 横图` |
| r18<br />`存在优化`       | 0 or 1 | 0: 无 r18 图片 | [https://moe.starfishdl.site/api/setu/v1?r18=1](https://moe.starfishdl.site/api/setu/v1?r18=1)             | 是否返回 r18 图片<br />`0: 否`<br />`1: 是`      |
| json<br />`存在优化`      | 0 or 1 | 0: 不返回 json | [https://moe.starfishdl.site/api/setu/v1?json=1](https://moe.starfishdl.site/api/setu/v1?json=1)           | 是否返回 json 数据，json 数据包含了一定程度的图片元数据<br />`0: 否`<br />`1: 是`             |
