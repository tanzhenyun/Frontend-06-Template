学习笔记

1. 浏览器工作原理

   http基础知识								     layout                          render

   url ------> html ------> dom  -------> dom with css ------> dom with position --->Bitmap

   HTTP       parse       css  computing   

   

2. 有限状态机处理字符串

   状态机所有的机器接受的 输入是一致的，状态机本身是没有状态的，无副作用；

   每个状态机都知道下一个状态

   +  每个机器都有确定下一个状态；（Moore）
   + 每个机器根据输入决定下一个状态；（Mealy）

   

3.  

   字符串中找到'a'

   ```
   function findAFromString(params) {
   	return params.includes("a")
   }
   ```

   

4.   

   不使用正则表达式，只用纯JavaScript实现找到字符'ab'

   ```
    function findABFromString(params) {
        let arr = params.split('');
            for (let i = 0; i < arr.length; i++) {
                if (i < arr.length - 1 && arr[i] === 'a' && arr[i + 1] === 'b') {
                	return true
                }
            }
        return false
    }
   ```

   

5.  

   不使用正则表达式，使用纯JavaScript实现找到字符‘abcdef’

   ```
   function findABCDEFFromString(params) {
           let state = ""
           for (const c of params) {
               if (c === 'a') {
                   state += c
               } else if (state && c === 'b') {
                   state += c
               } else if (state && c === 'c') {
                   state += c
               } else if (state && c === 'd') {
                   state += c
               } else if (state && c === 'e') {
                   state += c
               } else if (state && c === 'f') {
                   state += c
               }
               else {
                   state = ""
               }
           }
           return state === "abcdef"
       }
   ```

   

6.   

    状态机实现查找字符串

   + 每一个状态都是一个函数；
   + 这个函数如果满足这个状态就继续调用下一个状态的函数；
   + 当前函数如果不能满足查找的状态，就返回开始函数；
   + 如果是一直满足，则最后一个函数的状态设定为特定值，并且由最初函数return；

   重点是将每一个状态设置为函数，函数的返回值要么是满足条件的继续执行，要么是返回start开始函数重新查找；

   
   
7. 

   状态机实现部分重复的字符串

   + 设定一个初始状态；
   + 依次判断每个字符是否满足条件，满足就使用下一个状态函数更新设定状态，不满足则返回到前面的状态；
   + 如果是重复的字符串，当前状态不满足时，返回前一个相同字符的状态函数；

   

   ```
    function match(string) {
           let state = start;
           for (const c of string) {
               state = state(c)
           }
   
           return state === end;
       }
   
       function start(c) {
           if (c === 'a') {
               return foundA;
           } else {
               return start;
           }
       }
   
       function foundA(c) {
           if (c === 'b') {
               return foundB;
           } else {
               return start(c);
           }
       }
   
       function foundB(c) {
           if (c === 'c') {
               return foundC;
           } else {
               return start(c);
           }
       }
   
       function foundC(c) {
           if (c === 'a') {
               return foundA2;
           } else {
               return start(c);
           }
       }
   
       function foundA2(c) {
           if (c === 'b') {
               return foundB2;
           } else {
               return start(c);
           }
       }
   
       function foundB2(c) {
           if (c === 'x') {
               return end;
           } else {
               return foundB(c);
           }
       }
   
       function end(c) {
           return end
       }
   
       console.log(match('abcabcab'))
   
   ```

   ```
   function match(string) {
           let state = start;
           for (const c of string) {
               state = state(c)
           }
   
           return state === end;
       }
   
       function start(c) {
           if (c === 'a') {
               return foundA;
           } else {
               return start;
           }
       }
   
       function foundA(c) {
           if (c === 'b') {
               return foundB;
           } else {
               return start(c);
           }
       }
   
       function foundB(c) {
           if (c === 'a') {
               return foundA2;
           } else {
               return start(c);
           }
       }
   
   
       function foundA2(c) {
           if (c === 'b') {
               return foundB2;
           } else {
               return start(c);
           }
       }
   
       function foundB2(c) {
           if (c === 'a') {
               return foundA3;
           } else {
               return foundA(c);
           }
       }
   
       function foundA3(c) {
           if (c === 'b') {
               return foundB3;
           } else {
               return foundA(c);
           }
       }
   
   
       function foundB3(c) {
           if (c === 'x') {
               return end;
           } else {
               return foundB2(c);
           }
       }
   
   
       function end(c) {
           return end
       }
   
       console.log(match('abababx'))
   ```

   

8. HTTP状态解析

   物理层/数据网络   ---- >  Internet 网络层/IP层  ---- >TCP ----> HTTP

   TCP/IP基础知识

   + 流 ：传输数据

   + 端口：分配数据

   + require('net')：node包，流和端口的依赖node包

   + 包：TCP传输数据包

   + IP地址：根据地址找到包

   + libnet/libpcap：C++底层库

     

   Request、Respose 构成HTTP，一对一关系、 

   

9.  

   HTTP协议：文本型协议，全部是字符串解析；

   构成：

   Request line 

   + method：常见的是post、get；还有put，delete、options等；

   + path：路径

   + http版本

   headers

   + key和value键值对
   + 数量不确定
   + 空白行结束

   

   body

   + 由Content-Type决定，规定什么格式就是用什么格式写
   + 换行\r\n

   

10. 

11.  

    第二步 send 总结

    + 在Repuest的构造器中收集必要的信息；

    + 设计一个send函数，把请求真实发送到服务器；

    + send应该是异步函数 ，返回Promise；

       

      

12.   

    第三步 send 总结

    + 支持已经有的connection或者新建connection；

    + 收到数据传给parser；

    + 根据parser的状态resolve Promise；

       

       

      

13.  

    第四步ResponseParser总结

    + Response必须分段构造，用一个ResponseParser来装配；

    + ResponseParser处理ResponseText，我们用状态机分析文本的结构；

       

      

14.  

    bodyParser总结

    + Response的body可能根据Content-Type有不同的结构，因此会采用子Parser结构解决问题；
    + 使用状态机处理body格式；





