# jquery.qrcode
jquery.qrcode.js(with logo)

```
$('#output').qrcode({
    render: "canvas", //设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
    text: 'http://lp.vipabc.com/program/linkage_page/Olympic2016/index.html', //扫描二维码后显示的内容,可以直接填一个网址，扫描二维码后自动跳向该链接
    width: 200, //二维码的宽度
    height: 200,
    background: "#ffffff", //二维码的后景色
    foreground: "#000000", //二维码的前景色
    src: 'qrcord.png',
    imgWidth: 50,
    imgHeight: 50
});
```
