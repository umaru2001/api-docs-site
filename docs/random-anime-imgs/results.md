---
outline: deep
---
# 返回响应

## 200：成功 `v1` `v2`

`v1` 请求为 json 时，返回此结果（可放心点开查看，无彩蛋）：

```json
{
  "url": "https://img.starfishdl.site/yande.re%20928511.webp",
  "height": 2122,
  "width": 1500,
  "ratio": 0.707,
  "landscape": 0
}
```

`v2` 返回此结果（可放心点开查看，无彩蛋）：

```json
{
  "id":"66948362_p0",
  "tags":["アイドルマスターシンデレラガールズ","双葉杏","サクカ","サークルカット","CLIPSTUDIOPAINT"],
  "title":"Comic1☆１３に申し込みましたー！！",
  "description":"双葉杏本を作成予定中",
  "user":"シロ９じら",
  "userId":"7198717",
  "width":635,
  "height":903,
  "url":"https://i.pixiv.re/img-original/img/2018/01/24/21/17/10/66948362_p0.png"
}
```

## 302：跳转 `v1`

直接重定向到图片链接。

```http
redirect: https://img.starfishdl.site/yande.re%20928511.webp
```

> [!Note]
> 如果没有结果会返回一个 404 网页（不会重定向）

## 403：禁止访问 `v1` `v2`

`v1` 访问被主动限制，请明天再来或者<s>考虑换个 IP</s>

`v2`
1. 画师删除了图片或者图片权限设置为了隐藏
2. 图床失效，如新浪微博近几年抽风越来越多，可参见 [https://zhuanlan.zhihu.com/p/584795562](https://zhuanlan.zhihu.com/p/584795562)
3. 代理设置不正确

## 404：未找到资源 `v1` `v2`

`v1` 图片链接配置有点问题，可以通过文末联系方式联系我，不保证一定能解决。

`v2` 画师隐藏了链接；画师跑路；画师修改了作品；等操作导致原链接失效。3 个月会自动更新一次链接。

## 500+：服务器内部错误 `v1` `v2`

如果有报错信息，可以通过文末联系方法联系我，不保证一定能解决。

更有可能的情况：每天访问达到了上限，或者 CloudFlare 服务器内部出了问题。

解决方案：等第二天再来吧！

## 附联系方式

<donglaistarfish@gmail.com>
