const images = require("images");

function render (viewport, element) {
    if (element.style) {
        let img = images(element.style.width, element.style.height);

        if (element.style["background-color"]) {
            let color = element.style["background-color"] || "rgb(0,0,0)";
            color.match(/rgb\((\d+),(\d+),(\d+)\)/);
            img.fill(Number(RegExp.$1), Number(RegExp.$2), Number(RegExp.$3));
            viewport.draw(img, element.style.left || 0, element.style.top || 0)
        }
    }

    if (element.children) {
        for (let child of element.children) {
            render(viewport, child);
        }
    }
}

//  5
// 绘制使用的依赖是npm的images包
//绘制在viewport上
//绘制相关属性


// 6
//递归调用子元素的绘制方法完成DOM树的绘制；
//忽略了一些不需要的绘制的节点；
//实际的浏览器文字绘制部分是难点，需要依赖字体库；
//实际的浏览器还会对图层做一些compositing；

