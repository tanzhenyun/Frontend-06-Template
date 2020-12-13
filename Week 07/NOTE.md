学习笔记

1. js表达式

   运算优先级：

   member优先级

   .运算符 、[] 、`` 、super、new.target 、new Foo()

   new Foo()的 优先级高于 new Foo

   .运算取值取出来的是一个引用，引用分成两个部分，一部分是object ，另一个是 key

   

   Call  Experssion

   foo().b优先级降低，.运算前面确定了优先级

   

   Left Handside和Right Handside

   

   Experssions

   Update

   + a++ 、a--、--a、 ++a

   Unary

   + delete 、void、typeof、+、-、~、1、await 

   Exponental

   + ** 唯一一个右接合的运算符（乘方运算）

   Multiplicative

   + */ %

   Additive

   + +-

   Shift

   + << >> >>>

   Relationship

   + < > <= >= instanof in

   Equality

   + ==  !=  ===  !==

   Bitwise

   + & ^ |

   Logical

   +  && || 

   Conditional

   + ? : 三目运算符

     

2. 类型转换

    拆箱转换：是将一个object类型转换成普通类型

   var o = {

   ​        toString() {

   ​            return "2"

   ​        },

   ​        valueOf() {

   ​            return 1

   ​        },

   ​        [ Symbol.toPrimitive ]() {

   ​            return 3

   ​        }

   ​    }

   ​    var x = {};

   ​    console.log("x" + o)

   加法运算时：优先级Symbol.toPrimitive > valueOf > toString;

   o作为属性名时候会优先调用toString方法；

   

3. JS语句 运行时相关概念

+ 简单语句

+ 组合语句

+ 声明 

  Completion Record组成

  + [[type]]:normal、break、continue、return、or throw
  + [[value]]: 基本类型；
  + [[target]]:label



4.JS语句 |简单语句和复合语句

+ 简单语句
  + 表达式语句
  + 空语句
  + debugger ;语句
  + 异常语句
  + 循环匹配的continue和break语句
  + return返回值语句

+ 复合语句
  + {}之间的语句
  + if语句
  + switch语句
  + 循环语句
  + with语句（不建议使用）
  + label语句
  + try catch语句 try后面的{}是不能省略的

5.JS语句 |声明

+ 函数声明
+ 变量的声明
+ 类的声明 



预处理机制

所有声明都有预处理机制



作用域 



6.JS结构化 | 宏任务和微任务



js执行粒度（运行时）

+ 宏任务
+ 微任务（Promise）
+ 函数调用
+ 语句/声明
+ 表达式
+ 直接量/变量/this



7.js结构化 | JS函数调用



执行上下文栈

















 


















