学习笔记

1. 组件化

   组件的基本组成
   
   1. 属性
   2. 方法
   3. 配置
   4. 状态
   5. 事件
   6. 生命周期
   7. 树形结构必要性
   
   
   
2. 为组件添加JSX语法

  1. 构建环境：

     + npm init 、

     + npm install  -g  webpack  webpack-cli、

     + 安装babel、babel-loader、babel的plugin；

     + npm install --save-dev @babel/core @babel/preset-env;

     + 新建webpack.config.js配置文件

     + ```
       - module.exports = {
         ​    entry: "./main.js",
         ​    module: {
         ​        rules: [
         ​            {
         ​                test: /\.js$/,
         ​                use: {
         ​                    loader: "babel-loader",
         ​                    options: {
         ​                        presets: ['@babel/preset-env']
         ​                    }
         ​                }
         ​            }
         ​        ]
         ​    }
         }
       
       ```

     + 安装 npm install --save-dev @babel/plugin-transform-react-jsx

  2. *抽离公共方法和公共类等*

5. *实现轮播：*

   *1.图片排布*

   *2.transition控制动画*

   *3.使用transform的translateX控制移动位置*

   *4.控制当前和下一张图片的位置移动*

   *5. let nextIndex = (currentIndex + 1) % children.length; 针对一个数取余会控制值永远不会超出*

   6.浏览器帧16ms

6. *1.获取鼠标点击位置的横纵坐标值；*

   *2.计算鼠标移动距离，mousemove获取的clientX - startX*

   *3.给移动元素增加移动属性*

   4.mouseup时候去掉监听

