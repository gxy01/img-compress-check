# img-compression-check

图片压缩检查器。

## 背景

在我们的工程中，图片压缩是手动完成的。因为经过较大量的比较发现，图片压缩较好的是[tinypng](https://tinypng.com/)。但是tinypng免费版本是有次数限制的。所以基本上都是手动压缩。
然而手动意味着不可靠。所以需要我们检测一个图片是否被压缩过。

## 方法

这并不是一个高明的方法。
目前采用的方法很简单：
把图片用pngquant压缩一边，然后计算压缩率。一般tinypng和pngquant压缩率都是60到70.通过筛选压缩率，找出可能没有使用tinypng压缩的图片。

我想这里应该有更好的方法。求告知。

## 安装

```bash
npm i img-compression-check -g
```

## 使用

```bash
icc <image path> [rate]
```