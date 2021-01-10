学习笔记

1. CSS总体结构

   @charset

   @import

   rules

   + @media
   + @page
   + rule

![1609762644154](D:\极客作业\Frontend-06-Template\Week 11\1.png)

2. @规则的研究

   @charset ： https://www.w3.org/TR/css-syntax-3/

   @import ：https://www.w3.org/TR/css-cascade-4/

   @media ：https://www.w3.org/TR/css3-conditional/

   @page ： https://www.w3.org/TR/css-page-3/

   @counter-style ：https://www.w3.org/TR/css-counter-styles-3

   @keyframes ：https://www.w3.org/TR/css-animations-1/

   @fontface ：https://www.w3.org/TR/css-fonts-3/

   ~~@supports ：https://www.w3.org/TR/css3-conditional/~~

   @namespace ：https://www.w3.org/TR/css-namespaces-3/



![2](D:\极客作业\Frontend-06-Template\Week 11\2.png)

3. CSS规则的结构

   + 选择器
   + 声明
     + Key   --定义变量，使用var调用；var(--a)；
     + Value    calc函数、
   + ![3](D:\极客作业\Frontend-06-Template\Week 11\4.png)

   

4. 收集标准

    https://www.w3.org/TR

   ```
   JSON.stringify(Array.prototype.slice.call(document.querySelector("#container").children).filter(e => e.getAttribute("data-tag").match(/css/)).map(e => ({
           name: e.children[1].innerText,
           url: e.children[1].children[0].href
       })))
   ```

5. ![5](D:\极客作业\Frontend-06-Template\Week 11\5.png)



6. 选择器语法

   + 简单选择器
     + *
     + div 类型选择器
     + .class
     + #id
     + [attr = value]
     + :hover  伪类
     + ::before   伪元素
   + 复合选择器
     + <简单选择器><简单选择器><简单选择器>
     + *或div必须写在最前面
   + 复杂选择器
     + <复合选择器> <sp> <复合选择器>  空格
     +  <复合选择器> ">" <复合选择器> 直接父级
     + <复合选择器> "~" <复合选择器>  邻接关系
     + <复合选择器> "+" <复合选择器>
     + <复合选择器> "||" <复合选择器>

7. 选择器的 优先级

   + 简单选择器计数

     选取一个足够大的值，一般是256的整次幂

     ```
     S = 0 * N3 + 2 * N2 + 1 * N1 + 1
     N =65536
     计算得到S的值；
     ```



8. 伪类
   + 链接/行为
     + :any-link  匹配所有的超链接
     + :link   还没访问过的
     + :visited  访问过的链接
     + :hover  鼠标经过
     + :active  激活状态 
     + focus 获得焦点状态
     + target  链接到当前目标 主要是给锚点使用
   + 树结构
     + :empty  元素是否有子元素
     + :nth-child()  第几个子元素
     + :nth-last-child()  倒数第几个子元素
     + :first-child  :last-child :only-child  第一个元素  最后一个元素  唯一子元素
   + 逻辑型
     + :not伪类 只能写复合选择器不能写复杂选择器
     + :where  :has  

9. 伪元素

   + ::before

   + ::after

     自己设置content参与渲染和排版 

   + ::first-line

   + ::first-letter

![6](D:\极客作业\Frontend-06-Template\Week 11\6.png)













