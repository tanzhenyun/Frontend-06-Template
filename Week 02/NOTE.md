学习笔记

1. 广度优先搜索
   - 以开始点（start）为起点，向四周扩散搜索；
   - 将insert方法搜索的点 存入queue，只要queue内还有值就继续扩散搜索；
   - 从queue内取值使用shift方法，即从数组的开始处取值，并且会将这个值在数组内删除；
   - 只要搜索到结束点即完成搜索；
   - 向某一个点周围搜索的时候，如果这个点没有超出边界也没有被占用，就记录这个点 到数组table内；
   - 等到搜索到结束点的时候，就会形成一个路径的数组；
   - 对数据的处理是每次都取距离终点最小距离的值计算；

```javascript
async function findPath(map, start, end) {
    console.log(start)
    //设置开始搜索位置
    var queue = new Sorted([start], (a, b) => distance(a) - distance(b));
    let table = Object.create(map)
    //输入x、y点，先判断是否是超出地图范围
    //再判断是否已经是1
    //都不是的情况下设置为 寻路的值 2
    //并且将位置的x、y存入queue内部
    async function insert(x, y, pre) {
        if (x < 0 || x >= 100 || y < 0 || y >= 100) {
            return;
        }
        if (table[x * 100 + y]) {
            return
        }
        await sleep(10)
        container.children[x * 100 + y].style.background = "lightgreen";

        //某一个点实现了全部的搜索之后 存储这个点的坐标
        //按照存储的点的坐标反向搜索出路径
        table[x * 100 + y] = pre
        queue.give([x, y])
    }

    function distance(point) {
        return (point[0] - end[0]) ** 2 + (point[1] - end[1]) ** 2
    }
    //由原来的queue.length 修改为 queue.data.length
    while (queue.data.length) {
        //删除queue里第一个数值，并且返回第一个值，通过赋值解构将值赋值给xy
        let [x, y] = queue.take();
        //判断xy是否已经到end位置，到了就返回true，否则就继续使用insert寻找
        if (x === end[0] && y === end[1]) {
            let path = []
            while (x != start[0] || y != start[1]) {
                path.push(map[x * 100 + y]);
                [x, y] = table[x * 100 + y]
                // await sleep(30)
                container.children[x * 100 + y].style.background = "red";
            }
            return path;
        }
        //在搜索的时候下传递了“原始点”的坐标，将原始点的坐标存储到table里面
        await insert(x - 1, y, [x, y])
        await insert(x, y - 1, [x, y])
        await insert(x + 1, y, [x, y])
        await insert(x, y + 1, [x, y])

        await insert(x - 1, y - 1, [x, y])
        await insert(x + 1, y - 1, [x, y])
        await insert(x + 1, y + 1, [x, y])
        await insert(x - 1, y + 1, [x, y])
    }
    return null;
}

class Sorted {
    constructor(data, compare) {
        this.data = data.slice();
        //值得注意的是  箭头函数的函数体加不加return和大括号的问题
        // this.compare = compare || ((a, b) =>  a - b );

        this.compare = compare || ((a, b) => a - b);
    }
    take() {
        if (!this.data.length) {
            return
        }
        let min = this.data[0];
        let minIndex = 0;
        for (let i = 1; i < this.data.length; i++) {
            if (this.compare(this.data[i], min) < 0) {
                min = this.data[i];
                minIndex = i;
            }
        }
        //就是和最后一个值互换位置，然后删除最后一个值，删除的也是当前数据之中最小的值
        //保证在下一次执行take方法时候取到除此之外的最小值
        //保证每次都是取到最小值
        this.data[minIndex] = this.data[this.data.length - 1];
        this.data.pop();
        //每次会把最小值返回
        return min;
    }

    give(v) {
        this.data.push(v);
    }
}
```

