/**
 * faceCanvas - v0.9
 * 人脸识别五官坐标绘制组件
 * author : ZExceed
 * project: https://github.com/ZExceed/faceCanvas
 * licensed under the MIT
 */

(function(){
    'use strict';

    var $ = window.Zepto || window.jQuery;

    var mo = function(opts){
        this.options = $.extend({
            image: '',                         // 照片
            position: {},                      // 坐标数据
            rectStyle: 'rgba(255,0,255,0.7)',  // 脸部矩形样式
            pointStyle: 'rgba(255,0,127,0.7)', // 五官坐标样式
        }, opts);

        if(!this.options.image || !this.options.position){
            return;
        }

        this.init();
    };

    mo.prototype.init = function(){
        var _self     = this,
            container = $(this.options.container),
            canvas    = $('<canvas/>')[0],
            context   = canvas.getContext('2d'),
            img       = new Image();

        img.crossOrigin = '';
        img.src         = this.options.image;
        this.img        = img;
        this.canvas     = canvas;
        this.context    = context;
        this.container  = container;

        container.append(canvas);

        img.onload = function() {
            _self.draw(img);
        };
    };

    mo.prototype.draw = function(){
        var canvasW  = this.container.width(),
            canvasH  = this.container.height(),
            imgW     = this.img.width,
            imgH     = this.img.height,
            position = this.options.position,
            sx       = Math.round((imgW*position.center.x/100)-(canvasW/2)),
            sy       = Math.round((imgH*position.center.y/100)-(canvasH/2));

        // 人脸中心点居中绘制
        this.canvas.width  = canvasW;
        this.canvas.height = canvasH;
        this.context.drawImage(this.img, sx, sy, canvasW, canvasH, 0, 0, canvasW, canvasH);

        // 绘制脸部矩形
        var rw = Math.round(imgW*position.width/100),
            rh = Math.round(imgH*position.height/100),
            rx = Math.round((canvasW/2)-(rw/2)),
            ry = Math.round((canvasH/2)-(rh/2));
        this.context.lineWidth   = 4;
        this.context.strokeStyle = this.options.rectStyle;
        this.context.strokeRect(rx, ry, rw, rh);

        // 绘制五官坐标
        var fx, fy, fw, fh; fw = fh = 6;
        for (var key in position) {
            if(position.hasOwnProperty(key) && key !== 'center' && position[key].x && position[key].y){
                fx = Math.round((imgW*position[key].x/100)-sx-(fw/2));
                fy = Math.round((imgH*position[key].y/100)-sy-(fh/2));
                this.context.fillStyle = this.options.pointStyle;
                this.context.fillRect(fx, fy, fw, fh);
            }
        };
    };

    $.fn.faceCanvas = function(opts){
        return new mo($.extend({
            container: this
        }, opts));
    };
})();
