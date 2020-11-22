学习笔记

1. 字典树：

   主要包括生成树和对树结构进行操作等；

   1. 创建一棵空树，将传入的字符串循环遍历，插入树中；

   2. 循环过程中如果该字符已经 存在就直接插入，不存在就创建新的结点；

   3. 每次插入数据的截止符号都是使用一个特殊的标记，查找最大或者是最小就是根据这个截止符号判断的；

   4. 根据上课查找最大可以知道查找最小的方法

   5. minimum() {

      ​            let min = 100; //这个数可以根据 在查找最大值设定。

      ​            let minWord = null;

      ​            let visit = (*node*, *word*) => {

      ​                if (*node*[$] && *node*[$] < min) {

      ​                    min = *node*[$];

      ​                    minWord = *word*;

      ​                }

      ​                for (const p in *node*) {

      ​                    visit(*node*[p], *word* + p)

      ​                }

      ​            }

      ​            visit(this.root, '');

      ​            console.log(minWord, min)

      ​        }

   

   

2. kmp：

3. wildcard：