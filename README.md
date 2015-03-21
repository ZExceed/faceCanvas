# faceCanvas 人脸识别五官坐标绘制组件
用于face++人脸识别API返回的五官坐标数据的前端绘制

# DEMO
![image](https://github.com/ZExceed/faceCanvas/raw/master/screenshots/demo.jpg)

# 提醒
- 因canvas跨域问题，DEMO预览请注意需要服务器环境

# 数据格式
- 其中 width height center 是必须的，其余五官特征坐标不限制的，可以把landmark接口的坐标合并进去，输出json格式给前端处理即可。

```php
    **[width]** => 28
    **[height]** => 18.666667
    **[center]** => Array(
            [x] => 56.25
            [y] => 30.333333
    )
    ...
    [eye_left] => Array(
            [x] => 52.4425
            [y] => 24.7225
    )
    [eye_right] => Array(
            [x] => 65.55475
            [y] => 29.094167
    )
```

```html
<div class="face-wrapper">
    <div id="face-canvas" class="face-canvas"></div>
</div>
<script>
$('#face-canvas').faceCanvas({
    rectStyle: 'rgba(255,0,255,0.7)',  // 脸部矩形样式
    pointStyle: 'rgba(255,0,127,0.7)', // 五官坐标样式
    image: 'pic.jpg',                  // 人脸图片
    position: {"center":{"x":56.25,"y":30.333333},"eye_left":{"x":52.4425,"y":24.7225},"eye_right":{"x":65.55475,"y":29.094167},"height":18.666667,"mouth_left":{"x":46.97975,"y":32.807333},"mouth_right":{"x":59.06225,"y":36.176},"nose":{"x":55.138,"y":32.417833},"width":28,"left_eye_bottom":{"x":51.8155,"y":25.208},"left_eye_center":{"x":52.4425,"y":24.7225},"left_eye_left_corner":{"x":49.86575,"y":23.752333},"left_eye_pupil":{"x":52.4425,"y":24.7225},"left_eye_right_corner":{"x":54.59275,"y":26.160833},"left_eye_top":{"x":53.20475,"y":24.115167},"left_eyebrow_left_corner":{"x":49.393,"y":21.4805},"left_eyebrow_right_corner":{"x":58.28775,"y":24.558},"mouth_left_corner":{"x":46.97975,"y":32.807333},"mouth_lower_lip_bottom":{"x":51.525,"y":37.575667},"mouth_lower_lip_top":{"x":52.42025,"y":36.340167},"mouth_right_corner":{"x":59.06225,"y":36.176},"mouth_upper_lip_bottom":{"x":53.3915,"y":35.413833},"mouth_upper_lip_top":{"x":53.9505,"y":34.884333},"nose_left":{"x":51.06,"y":31.5305},"nose_right":{"x":58.9405,"y":33.170167},"nose_tip":{"x":55.138,"y":32.417833},"right_eye_bottom":{"x":65.28825,"y":29.655667},"right_eye_center":{"x":65.55475,"y":29.094167},"right_eye_left_corner":{"x":62.474,"y":28.633167},"right_eye_pupil":{"x":65.55475,"y":29.094167},"right_eye_right_corner":{"x":68.299,"y":29.902167},"right_eye_top":{"x":65.95325,"y":28.480333},"right_eyebrow_left_corner":{"x":62.986,"y":26.172167},"right_eyebrow_right_corner":{"x":71.35375,"y":28.419167}}
});
</script>
</script>
```
