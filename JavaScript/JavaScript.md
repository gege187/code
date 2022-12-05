#### 基础

**js组成**：JS语法【ECMAScript】、DOM（页面文档对象模型）、BOM（浏览器对象模型）

**js书写位置：**行内式、内嵌式、外链式

js推荐使用**单引号 ‘   ‘**，**严格区分大小写**

**注释**：单行注释（//）（Ctrl + /）多行注释（/* */）（Shift + Alt + A）

**修改注释：**设置--键盘快捷方式---搜索--修改

**输入输出语句**：

**数据运算**

：数字运算：

```javascript
alert('2 * (12 / 3) + 8 - 10');
```

比较大小

```javascript
alert(22 == 33);  输出false
```

字符串：使用单引号或双引号包裹起来的数据

```javascript
alert('data');
```

字符串比较：

```js
alert('22' == '33');   
```

字符串与数字拼接：

```javascript
alert('date:' + '2022-7-6');
alert('22 + 33 =' + 22 + 33 )；  输出22+33=2233
alert('22 + 33 =' + (22 + 33));   输出22 + 33 = 55
```



常量命名一般使用大写字母表示

#### 变量

声明变量----赋值 == 变量的初始化

```javascript
var age;
age = 18;
   ==
var age = 18;
```

2.同时声明多个变量，变量之间用逗号分隔

3.声明变量的特殊情况

​	1.只声明不赋值  ---underfined未定义

​	2.不声明不赋值直接使用   --报错

​	3.不声明直接赋值使用     --可以使用

###### 变量命名规范

●由==字母(A-Za-z)、 数字(0-9)、 下划线( )、美元符号($ )==组成,如: usrAge, num01, name

●严格==区分大小写==。var app;和var App;是两个变量

●==不能==以数字开头。18age 是错误的

●==不能==是关键字、保留字。例如: var. for. while  name

●变量名必须有意义。MMD BBD

●遵守==驼峰命名法==。首字母小写,后面单词的首字母需要大写。myFirstName

●推荐翻译网站:有道   金山词霸

#### 数据类型

js的数据类型是根据 = 右边变量 值 来确定

数据类型 可变化

###### 基本数据类型

![image-20220706235429828](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220706235429828.png)

**Number 数字型**

进制

1.八进制  0~7  数字前加0  代表八进制

2.十六进制  0~9 a~f 数字前加 0x 表示十六进制

特殊值

```js
console.log(Number.MAX_VALUE); //最大值
console.log(Number.MIN_VALUE);  //最小值
console.log(Infinity);  //无穷大
console.log(-Infinity);  //无穷小
console.log(NaN);  //非数值
```

**字符串String**

转义符

```js
\n : 换行
\t : tab缩进
```

字符串长度

```javascript
变量名.length;
```

字符串拼接  

  用‘ + ’连接；只要有字符串，数据类型结果都是拼接的，连起来

**Boolean类型**

**Underfined类型**

变量声明未赋值

**Null类型**

###### 获取变量数据类型

```js
console.log(typeof 变量名);
```

**字面量**

●数字字面量:8,9, 10

●字符串字面量: '黑马程序员，"大前端"

●布尔字面量: true , false 

###### 转换数据类型

**转换成字符串**

![image-20220707144550935](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220707144550935.png)

**<u>字符型</u>转换成<u>数字型</u>**

![i](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220707150211124.png)

**转换成布尔型**

![image-20220707223012263](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220707223012263.png)

●代表<u>空、否定</u>的值会被转换为<u>false</u>, 如 ‘  ’、0、NaN、null、 undefined

●<u>其余值</u>都会被转换为<u>true</u>



**编译语言和解释语言的区别**

**标识符、关键字、保留字**

标识(zhi)符：

变量名称一般用名词

函数名称一般用动词

就是指开发人员为变量、属性、函数、参数取的名字。
标识符不能是关键字或保留字。

关键字：

是指JS本身已经使用了的字,不能再用它们充当变量名、方法名。
包括: break. case、 catch, continue、 default、 delete、 do、 else、 finally、 for. function、 if、 in、instanceof、new、 return. switch. this、 throw. try. typeof. var. void、 while、 with等。

保留字：

实际上就是预留的"关键字”, 意思是现在虽然还不是关键字,但是未来可能会成为关键字,同样不
能使用它们当变量名或方法名。
包括: boolean. byte、 char、 class、 const、 debugger、 double、 enum. export、 extends、
fimal、float、 goto、implements、 import、 int、interface、1ong、 mative、package、
private、protected. public、short、 static、super、 synchronized. throws、 transient.
volatile等。

#### 运算符（operator）

**表达式：**是由数字、运算符、变量等组成的式子。表达式都应该有个结果（返回值）

```js
2 = 1 + 1;
```



###### 算数运算符

![image-20220707225030523](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220707225030523.png)

取余时运算结果的正负：取决于被除数（%左边的符号），与余数（%右边的符号）无关

浮点数的精度问题，不能直接运算和比较

###### 递增递减运算符

前置递增递减 、后置递增递减

必须配合变量使用

```js
var num = num + 1;  
num++; 
++num;

var num = num - 1;
num--;
--num;
```

###### 比较运算符

概念：比较运算符(关系运算符)是两个数据进行比较时所使用的运算符,比较运算后,会返回1个==布尔值==( true/ false )作为比较运算的结果。

![image-20220707233508261](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220707233508261.png)

###### 逻辑运算符

概念：逻辑运算符是用来进行==布尔值运算==的运算符,其返回值也是==布尔值==。后面开发中经常用于多个条件的判断

![image-20220707234116603](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220707234116603.png)

**短路运算/逻辑中断**

短路运算的原理：当有多个表达式(值)时，左边的表达式值可以确定结果时,就不再继续运算右边的表达式的值

**1. 逻辑与**
●语法：表达式1  &&  表达式2
●如果第一个表达式的值为真 , 则返回表达式2
●如果第一个表达式的值为假 , 则返回表达式1

**1. 逻辑或**
●语法：表达式1  ||  表达式2
●如果第一个表达式的值为真 , 则返回表达式1
●如果第一个表达式的值为假 , 则返回表达式2

###### 赋值运算符

同时赋值

```js
var a = b = c = 8;
```

![image-20220708003650296](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220708003650296.png)

###### 运算符优先级

![image-20220708004006136](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220708004006136.png)

一元运算符 逻辑非  优先级很高

#### 流程控制

流程控制就是来控制我们的代码按照什么结构顺序来执行

流程控制主要有三种结构,分别是**顺序结构**、**分支结构**和**循环结构**,这三种结构代表三种代码执行的顺序。

<img src="C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220708184001802.png" alt="image-20220708184001802" style="zoom:67%;" />

 顺序结构：是程序中最简单、最基本的流程控制,它没有特定的语法结构,程序会按照<u>代码的先后顺序</u>,依次执行

分支结构：由上到下执行代码的过程中,根据不同的条件,执行不同的路径代码(<u>执行代码多选一</u>的过程) , 从而得到不同的结果

##### if 分支语句

**if /else 分支语句**

**if /else if / else 语句** ：利用多个条件来选择不同的语句执行得到不同的结果<u>多选1</u>的过程

##### 三元运算符：

条件表达式 ? 表达式1 : 表达式2

##### **switch语句：**

多分支语句,它用于基于不同的条件来执行不同的代码。当要针对变量设置一系列的特定值的选项时,就可以使用switch。

注意事项：1.（表达式）经常写成变量  2. （表达式）和 value值相匹配是  全等关系   3.  当前case 中没有break  则不会退出 继续执行下一个case

**switch语句和if else if语句的区别**

①一般情况下,它们两个语句可以相互替换
②switch...case 语句通常处理case为比较确定值的情况,而if ..else...if 语句更加灵活,常用于范围判断(大于、等于某个范围)
③switch 语句进行条件判断后直接执行到程序的条件语句,效率更高。而if..else..if 语句有几种条件,就得判断多少次。
④当分支比较少时, if.. else语句的执行效率比switch语句高。
⑤当分支比较多时, switch语句的执行效率比较高,而且结构更清晰。

#### **循环**

在程序中,一组被重复执行的语句被称之为**循环体**,能否继续重复执行,取决于循环的**终止条件**。由循环体及循环的终止条件组成的语句,被称之为**循环语句**

**断点调试**

检查----Sources--刷新---上下键调试/watch

##### for循环

```js
for(初始化变量;条件表达式;操作表达式){
     //循环体
}
3.初始化变量就是用var声明的一个普通变量，通常用于作为计数器使用
4.条件表达式就是用来决定每次循环是否继续执行  就是终止的条件
5.操作表达式是每次循环最后执行的代码  经常用于我们计数器变量进行更新(递增或者递减)
```

##### 双重for循环

循环嵌套是指在一个循环语句中再定义一个循环语句的语法结构,

例如在for循环语句中,可以再嵌套一个for循环,这样的for循环语句我们称之为双重for循环。

```js
for(初始化变量;条件表达式;操作表达式){
     for(初始化变量;条件表达式;操作表达式){
     //循环体
}
}
2.把里面的循环看做是外层循环的语句
3.外层循环循环一次， 里面的循环执行全部

```

**九九乘法表**

<u>【核心代码】：j <= i ;   sum   **+=**    i +'*'+ j + '=' + i**j + '\t';</u>

##### for循环小节

for循环可以重复执行某些相同代码
for循环可以重复执行些许不同的代码,因为我们有计数器
for循环可以重复执行某些操作,比如算术运算符加法操作
随着需求增加,双重for循环可以做更多、更好看的效果
双重for循环，外层循环一次,内层for循环全部执行
for循环是循环条件和数字直接相关的循环
分析要比写代码更重要
一些核心算法想不到,但是要学会,分析它执行过程
举-一反三,自己经常总结,做-些相似的案例

##### while循环

```js
while (条件表达式) {
	//循环体
 }
里面应该也有计数器初始化变量
里面应该也有操作表达式 完成计数器的更新 防止死循环

```

##### do...while循环

```js
do{
	//循环体
} while(条件表达式)
do while先执行一次循环体 在判断条件
如果条件表达式结果为真，则继续执行循环体，否则退出循环
至少执行一次
```

##### 循环小节

●JS中循环有  for. while、 do while
●三个循环很多情况下都可以  相互替代使用
●如果是用来计次数,跟数字相关的,三者使用 基本相同,但是我们更喜欢用for
●while和do...while可以做更复杂的判断条件,比for循环灵活一些
●while 和do...while执行顺序不一样, while先判断后执行, o...while先执行一次 ,再判断执行
●while 和do...while执行次数不一样, do...while 至少会执行一次循环体，而while可能一次也不执行
●实际工作中,我们更常用for循环语句,它写法更简洁直观,所以这个要重点学习



##### continue break关键字

continue：退出本次循环，继续执行剩余  次数  的循环

<u>**留下个位数为n的数**【核心代码：】  i % 10 = n ;</u>

break： 退出整个循环



#### array数组

数组可以把一组相关的数据一起存放，并提供方便的访问（获取）方式。

数组是指一组数据的集合,其中的每个数据被称作元素,在数组中可以存放任意类型的元素。数组是一种将一组数据存储在单个变量名下的优雅方式。

##### 创建数组

1.利用new关键字创建数组

```js
var 数组名 = new Array();
```

2.利用数组字面量创建数组

```js
var 数组名 = [];
```

##### 访问（获取）数组元素

索引index 从0开始 ，数组名[索引号]，

##### 遍历数组

把数组元素从头到尾访问一次

##### 数组长度

数组名.length;

**数组最大值**

【核心代码：】定义一个变量用来存放最大值，将元素依次与之比较，元素比变量大，就将元素的值复制给最大值

##### 数组中新增元素

1.修改length长度

2.修改索引号，追加数组元素

**将一个数组中符合条件的元素放在新数组中**

【核心代码：】再定义一个新变量=0，在循环中用来接收符合元素的值，变量++ 

​							或者：利用arr.length 接收符合元素的值

**冒泡排序**

把一系列的数按照一定的顺序进行排列显示

【核心代码：】【正三角星】【倒三角星】

```js
for(var j = bubble.length-1; j > 0 ;j--){
    for(var i = 0; i < j; i++){
        //交换变量
    }
}
//方法2
for(var j = 0; j < bubble1.length-1; j++){
    for(var i = 0; i < bubble1.length-j-1; i++){
        //交换变量
    }
}
```



#### 函数function

##### 函数使用：

###### 1.声明函数  

1.function声明函数的关键字 全部小写  2.函数名一般是动词  3.函数不调用不执行 

2.函数表达式 (匿名函数)

```js
var fun = function(){};
```

（1）fun是变量名，不是函数名

（2）函数表达式声明方式和声明变量差不多，只是变量里面存的是值，函数表达式里边存的是变量

（3）函数表达式也可以传递参数

###### 1.2 调用函数

1.调用函数要加小括号  

```js
function sayHi() {
    console.log('hi');
}
sayHi();
```

函数可以封装一段重复使用的代码

函数可以调用另一个函数

##### 参数

函数参数使函数重复封装不同的代码

参数可以有，可以没有

形参和实参

形参之间看做是没有声明的变量

```js
function sayHi(形参1，形参2) { //声明函数时小括号里存放的是形参
    console.log('hi');
}
sayHi(实参1，实参2); //调用函数是小括号里存放的是实参
```

##### arguments

只有函数才有，所有函数都内置了一个arguments对象，存储所有传递过来的实参

按照数组的方式遍历arguments  ：arguments.length

**伪数组**

1.具有数组的length属性

2.按照索引的方式进行存储

3.没有真正数组的一些方法 pop(),push();

##### 作用域

就是代码名字（变量）在某个范围里起作用和效果

提高可靠性 ，减少命名冲突

（es6）之前：全局作用域   局部作用域

**全局作用域**：整个script标签，或者是一个单独的js文件

**局部作用域**（函数作用域）：在函数内部就是局部作用域，代码名字只在函数内部起作用

js中没有块级作用域，（es6）新增**块级作用域{}    if{}     for{}**  



根据作用域的不同，变量也分为**全局变量**和**局部变量**

**全局变量：**在全局作用域下的变量

！！！在函数内部  **不声明直接赋值**  的变量，属于全局变量

**局部变量：**在局部作用域下的变量，在函数内部的变量就是局部变量

！！！函数的形参也可以看做是局部变量

3. 执行效率：

   全局变量只有浏览器关闭的时候才会销毁，比较占内存资源
   局部变量当我们程序执行完毕就会销毁，比较节约内存资源



##### 作用域链

函数嵌套函数

根据在内部函数可以访问外部函数变量的这种机制,用链式查找决定哪些数据能被内部函数访问,就称作作用域链

内部函数  访问  外部函数  变量  采取的是链式查找  的方式来决定  取哪个值，这种结构称为作用域链



##### 预解析

1. 我们js引擎运行js分为两步:      **预解析		代码执行**
   (1). 预解析js引擎会把js里面所有的  **var** 	还有   **function**  提升到<u>当前作用域</u>的最前面
   (2). 代码执行按照代码  书写的顺序  从上往下    执行

2. **预解析**分为    变量预解析(变量提升)       和     函数预解析(函数提升)
   (1). **变量**提升就是把所有的<u>变量声明</u>提升到当前的作用域最前面     不提升<u>赋值操作</u>

   (2). **函数**提升就是把所有的<u>函数声明</u>提升到当前作用域的最前面       不<u>调用函数</u>

函数表达式 调用函数必须写在函数表达式的下面



#### 对象

**什么是对象**？

一个具体的事物

在JavaScript中,对象是一组无序的相关**属性和方法**的集合

**属性**:事物的**特征**,在对象中用属性来表示(常用名词)
**方法**:事物的**行为**,在对象中用方法来表示(常用动词)

所有的事物都是对象,例如字符串、数值、数组、函数等。

##### 创建对象

###### 利用字面量创建对象

```js
var obj = { };   //创建空对象
var obj{
    name:'张三';
    age:20;
    sex:'男';
    sayHi:function(){   
        
    }
}
里面的属性或者方法我们采取键值对的形式   键 属性名:  值 属性值
多个属性或者方法中间用 逗号 隔开的
方法 冒号 后面跟的是个 匿名函数
```

##### 使用对象

调用对象属性 ：

(1)对象名.属性名

```js
console.log(obj.user);
```

(2)对象名['属性名']

```js
console.log(obj['age']);
```

调用对象方法： 一定要加小括号

```js
obj.sayHi();
```

**变量、属性、函数、方法的区别**

1.变量和属性

相同：用来存储数据

不同：变量是单独声明并赋值   调用直接写变量名  单独存在

​			属性是对象里不需要声明   使用时  是对象.属性

2.函数和方法

相同：实现某种功能 

不同：函数 单独声明  ；调用是  函数名()   单独存在

​			方法  在对象里 不需要声明  调用是  对象名.方法；

###### 利用  new Object  创建对象

```js
var obj = new Object();
利用等号赋值的方法，添加对象属性和方法
用分号隔开
```

###### 利用 构造函数 创建对象

构造函数：把对象里面一些相同的**属性和方法抽象出来封装**到函数当中

语法格式：

```js
function 构造函数名(){
    this.属性 = 值;
    this.方法 = function(){

    }
}
new 构造函数名(); 
//1.构造函数名首字母大写
//2.构造函数不需要return就可以返回结果
//3.调用构造函数必须使用 new
//4.只要new Star（）调用函数就创建一个对象  liu 相当于得到{}里的属性方法
//5.属性和方法前面必须添加this
```

**new关键字**

1. new 构造函数在内存中创建一个空的对象
2. this  指向刚才创建的对象
3. 执行  构造函数里面的代码  给空对象添加属性方法
4. 返回对象

**构造函数和对象**

###### 类和实例

● 构造函数 ,如 Stars() ,抽象了对象的**公共**部分,封装到了函数里面,它泛指某一大**类( class )**
● 创建对象, 如 new Stars() ,特指**某一个**,通过new关键字创建对象的过程我们也称为**对象实例化**

###### 遍历对象

```js
for(k in obj){  //一般用k
    //console.log(k);   //只输出变量 得到属性名
    console.log(k+':'+obj[k]);  //只输出obj[k],得到值  可以一块输出
}
```

#### 内置对象

js对象：自定义对象、内置对象、浏览器对象

前两种是js基础，属于ECMAScript，第三个是JS特有对象

**内置对象**是指JS语言自带的一些对象，提供常**用的或是最基本的方法和功能**

##### 查MDN文档

如何学习对象方法：

1. 查阅方法功能
2. 查看参数的意义和类型
3. 查看返回值的意义和类型
4. demo测试

##### Math对象

```js
Math.max();  //最大值方法

```

##### Date日期对象

是一个**构造函数**，必须使用  new  来调用创建日期对象

**参数**：

数字型 ，数字之间用逗号隔开  （月份从0开始算）

字符串型，用-连接 ，时间和日期之间空格隔开

**日期格式化**：

**获取总毫秒数**

**案例--倒计时**

```js
【核心代码】
获取当前总毫秒数
输入约定好的将来某一时刻   PS：【countDown('2022-7-27 18:00:00')】
未来减当前毫秒 / 1000  是 秒数
var d = parseInt(times / 60 / 60 / 24);
d = d < 10 ? '0'+ d : d;
var h = parseInt(times / 60 / 60 % 24);
h = h < 10 ? '0'+ h : h;
var m = parseInt(times / 60 % 60);
m = m < 10 ? '0'+ m : m;
var s = parseInt(times % 60);
s = s < 10 ? '0'+ s : s;
```

##### Array数组对象

**检测是否是数组**

```js
var arr = [];
console.log(arr instanceof Array); //true
var obj = {};
console.log(obj instanceof Array);  //flase
```

![image-20220727154735158](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220727154735158.png)

**添加元素**

	push（）

（1）给数组追加新的元素（在最后）

（2）参数：push()参数直接写要添加的数组元素

（3）返回值：push()结束后，返回新数组的长度

（4）新数组也会发生变化

```js
有一个包含工资的数组[1500, 1200, 2000,2100, 1800] ,要求把数组中工资超过2000的删除,剩余的放到新数组里面
【核心代码】：
Array.push(arr[i]);
```



	unshift（）

（1）给数组追加新的元素（在前边）

（2）参数：unshift()参数直接写要添加的数组元素

（3）返回值：unshift()结束后，返回新数组的长度

（4）新数组也会发生变化

**删除元素**

	pop（）

（1）删除数组最后一个元素

（2）参数：无参

（3）返回值：返回被删除的元素

（4）新数组也会发生变化

	shift（）

（1）删除数组第一个元素

（2）参数：无参

（3）返回值：返回被删除的元素

（4）新数组也会发生变化

**数组排序**

    .reverse()
    
    .sort()

![image-20220727171723269](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220727171723269.png)

**数组索引**

    元素.indexOf(数组元素)

只返回第一个满足条件的索引号

如果找不到元素，返回  -1

    元素.lastIndexOf(数组元素)

返回最后一个满足条件的索引号

如果找不到元素，返回  -1

**案例—数组去重**

把旧数组里面不重复的元素选取出来放到新数组中,重复的元素只保留一个

【核心代码】我们遍历旧数组,然后拿着旧数组元素去查询新数组,如果该元素在新数
否则不添加。

```js
if(newArr.indexOf(arr6[i]) === -1){
    newArr.push(arr6[i]);
}
```

**数组转换为字符串**

    .toString()
    
    .join(分隔符)  .join('-')   .join('+')

**数组连接**

```js
.concat()
```

**数组截取**

```js
.slice(begin,end)  从第几个开始，到第几个结束，左闭右开
```

**数组删除**

```js
.splice()  从第几个开始，删除几个
```

##### 字符串

**基本包装类型**

基本包装类型: 就是把简单数据类型包装成为了复杂数据类型，这样基本数据类型就有了属性和方法

**字符串不可变**

指的是里面的值不可变,虽然看上去可以改变内容,但其实是地址变了,内存中新开辟了一一个内存空间。

**根据字符返回位置**

字符串所有的方法,都不会修改字符串本身(字符串是不可变的) ,操作完成会返回一一个新的字符串。

查找字符串中某一个字符出现的位置和次数

【核心算法】

1.先查找第一个o出现的位置

2.只要indexOf返回的结果不是-1 就继续往后查找  当前索引加1 

**根据位置返回字符**

    .charAt(index)  : 根据索引号返回字符（值）
    
     str[index]
    
    .charCodeAt(index)：根据索引号返回 字符的ASCII

**拼接字符串**

```js
.concat('char','char'...);
```

**截取字符串**

```js
.substr('起始位置','保留几个字符'); 
```

**替换字符串**

```js
.replace('替换谁','替换成');
```

**字符转换为数组**

```js
.split('分隔符');  分隔符：用, . /等哪个分隔字符，分隔成数组
```

**字符转换大小写**

```js
.toUpperCase();
.toLowerCase();
```

![image-20220730151920243](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220730151920243.png)

#### 简单类型和复杂类型

简单类型又叫做基本数据类型或者值类型

复杂类型又叫做引用类型。

●值类型:简单数据类型/基本数据类型,在存储时变量中存储的是值本身,因此叫做值类型
       string , number , boolean , undefined , null

●引用类型:复杂数据类型,在存储时变量中存储的仅仅是地址(引用) ,因此叫做引用数据类型
       通过new关键字创建的对象(系统对象、自定义对象) , 如Object, Array、 Date等

```js
var kong = null;
console.log(typeOf kong); //Object
//简单数据类型 null  返回一个空对象 object
//如果有个变量  以后打算存储为对象  暂时没想好放啥  可以给null
```

##### 堆和栈

堆栈空间分配区别:
栈(操作系统) : 由操作系统自动分配释放存放函数的参数值、局部变量的值等。

其操作方式类似于数据结构中的栈;

堆(操作系统) : 存储复杂类型(对象)，一般由程序员分配释放,若程序员不释放,由垃圾回收机制回收。

<u>简单数据类型存放到栈里面</u>

里面直接开辟一个空间，存放的是值

<u>复杂数据类型存放到堆里面</u>

首先在栈中存放一个地址，用十六进制表示，地址指向堆里的数据

##### 简单类型传参

函数的形参也可以看做是一个变量 ,当我们把一个 值类型 变量作为参数传给函数的形参时,其实是把变量在栈空间里的值复制了一份给形参 ,那么在方法内部对形参做任何修改,都不会影响到外部变量。

**复杂数据类型**

函数的形参也可以看做是一一个变量,当我们把 引用类型变量 传给形参时,其实是把变量在栈空间里保存的堆地址复制给了形参,形参和实参其实保存的是同一一个堆地址,所以操作的是同一个对象。

#### web APIs

js基础阶段以及Web APIs阶段

![image-20220808173715295](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220808173715295.png)

API 和 Web API

API：API是给程序员提供的一种工具,以便能更轻松的实现想要完成的功能。

Web API：是浏览器提供的一套操作浏览器功能和页面元素的 API( BOM和DOM)。

#### DOM

处理页面的接口，改变页面结构，内容，样式

DOM树

![image-20220808185710000](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220808185710000.png)

DOM把以上元素都看做是对象

##### 获取页面元素

1.通过id获取

```js
document.getElementById('id名');
```

2.通过标签名获取

```js
document.getElementsByTagName('li');
```

3.根据类名获取元素集合

```js
document.getElementsByClassName('one');
```

4.根据指定选择器打印第一个元素

```js
document.querySelector('.one');  //类选择器
document.querySelector('#one');   //id选择器
document.querySelector('li');   //标签选择器
```

5.返回指定选择器的所有元素对象集合

```js
document.querySelectorAll('.one');
```

6.获取元素属性

(自定义属性用data-开头)

```js
element.属性  //得到内置属性值
element.getAttribute('属性');    //得到自定义属性
element.getAttribute('data-属性'); 
```



##### 获取特殊元素

获取body元素

```js
document.body;
```

获取html元素

```js
document.documentElement;
```

##### 事件

1.事件源   2.事件类型  如何触发    3.处理事件  在函数程序里执行

```js
event.onclick = function(){

}
```

获取焦点onfocus

失去焦点onBlur

![image-20220809135442594](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220809135442594.png)

##### 操作元素

###### 修改元素内容

```js
element.interText(); 
1.不识别html标签
2.去除html标签，去掉空格和换行
```

```js
element.interHTML();
1.识别html标签    W3c标准
2.保留空格和换行，保留html标签
```

###### 修改元素属性

```js
var img = ...
img.src = '';
img.width = '';
```

直接给属性赋值

【案例】根据不同时间,页面显示不同图片,同时显示不同的问候语。

###### 修改表单属性

type、value、checked、selected、disabled

【显示/隐藏密码】

```js
flag = 0;
    btn.onclick = function(){
        if(flag == 0){
            input.type = 'text';
            btn.innerHTML = '点击隐藏';
            flag = 1;
        }else{
            input.type = 'password';
            btn.innerHTML = '点击显示';
            flag =0;
        }
    }
```

###### 修改样式属性

```js
this[element].style.backgroundColor = '#adf';
//属性采取驼峰命名法
//生成行内样式，css权重高
```

【案例】点击关闭二维码、循环精灵图

**利用className修改样式属性**

适用于修改元素样式过多的时候

```js
more.className = '类名';
// 如果想要保留原来的类名，可以
this.className = 'more change';
```

【案例】密码框验证信息

**设置属性值**

（设置自定义属性 data-属性）

```js
element.属性 = '值';   //内置属性
element.setAttribute('属性','值');
element.setAttribute('data-属性','值');     //自定义属性
//h5新增获取自定义属性的方法，只能获取data-开头的
element.dataset.属性
element.dataset['属性'] （自定义属性里有多个-连接的单词，获取时必须是驼峰命名法）
```

移除属性

```js
element.removeAttribute('属性');
```



##### 排他思想（算法）

1.给所有元素清除样式

2.给当前元素添加样式

【案例】全选/取消全选

```js
for(var i = 0; i < inps.length; i++){
    inps[i].onclick = function(){
        //flag用来控制全选按钮是否被选中
        var flag = true;
        for(var i = 0;i < inps.length; i++){
            if(!inps[i].checked){  //(不等于ture) 如果inps中有没有选中的，就让全选按钮等于false
            flag = false;
            }
        }
        inp.checked = flag;
        /*  如果当前处于全选状态下，可以取消全选按钮
                    if(this.checked != inp.checked){
                    inp.checked = !inp.checked;
                } */
    }
}
```

#### 节点操作

![image-20220815185638629](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220815185638629.png)

网页中的所有内容都是节点(标签、属性、文本、注释等) , 在DOM中 , 节点使用node来表示。

HTML DOM树中的所有节点均可通过JavaScript进行访问 , 所有HTML元素(节点)均可被修改 , 也可以创建或删除。

![image-20220815185656386](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220815185656386.png)

节点：至少拥有nodeType（节点类型）、nodeName（节点名称）、nodeValue（节点值）三个属性。

●元素节点nodeType为1，主要是元素节点
●属性节点nodeType为2
●文本节点nodeType为3 (文本节点包含文字、空格、换行等)

##### 节点层级

###### 父子级节点

```js
parentNode：父节点

childNodes：子节点(不推荐)

parentNode.children是一个只读属性,返回所有的子元素节点。
它只返回子元素节点,其余节点不返回(这个是我们重点掌握的)。

// 1.获取节点的第一个li和最后一个li,第一个子节点，不管是文本节点还是元素节点
console.log(ul.firstChild);
console.log(ul.lastChild);
//2.获取第一个和最后一个元素节点
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
// 3.实际开发的写法
console.log(ul.children[0]);
console.log(ul.children[li.children.length - 1]);
```
【案例】下拉菜单悬停显示

```js
this.children[1].style.display = 'block';   //当前元素的第二个孩子
```

###### 兄弟节点

```js
//获取上一个兄弟节点
console.log(div.previousSibling);
// 获取上一个兄弟的元素节点
console.log(div.previousElementSibling);
//获取下一个兄弟节点，包括元素节点 文本节点等等
console.log(div.nextSibling);
// 获取下一个兄弟节点的元素节点
console.log(div.nextElementSibling);
```

封装函数解决兼容性问题

![image-20220816092219388](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220816092219388.png)

###### 创建和添加节点

```js
//创建节点

var li = document.createElement('li');

// 获取要添加元素的父级

var ul = document.querySelector('ul');

// 1.添加元素到最后一个，父级.appendChild(子级);

 ul.appendChild(li);

// 2.添加节点到指定位置

var lili = document.createElement('li');

//把新元素添加到ul的第一个元素前，添加元素,'指定位置'

ul.insertBefore(lili,ul.children[0]);
```

**三种创建元素方式**

```js
document.write();  //直接将内容写入页面的内容流,如果页面文档流加载完毕，再调用这句话会导致页面重绘
document.innerHTML();  //将内容写入某个DOM节点,不会导致页面全部重绘,创建多个元素效率更高(不要拼接字符串,采取数组形式拼接) , 结构稍微复杂
document.createElement();  //创建多个元素效率稍低一点点,但是结构更清晰
```



###### 删除和复制节点

```js
//删除节点
var ol = document.querySelector('ol');
ol.removeChild(ol.children[0]);

//复制/克隆节点
//如果括号参数为空或者为false , 则是浅拷贝,即只克隆复制节点本身,不克隆里面的子节点。
var olol = ol.children[0].cloneNode()
//深拷贝，复制标签和里边的内容
var olol = ol.children[0].cloneNode(true)
//添加节点
ul.appendChild(olol);
```

#### 事件高级

注册事件：给元素添加事件，称为注册事件或者绑定事件

**传统注册方式：**

以on开头，特点：注册事件的唯一性
同一个元素同一个事件只能设置一个处理函数 ,最后注册的处理函数将会覆盖前面注册的处理函数

**方法监听注册事件：**addEventListener()

特点：同一个元素同一个事件可以注册多个监听器，按注册顺序依次执行

```js
eventTarget . addEventListener (type, listener[, useCapture])
该方法将指定的监听器注册到eventTarget (目标对象)上,当该对象触发指定的事件时,就会执行事件处理函数。
该方法接收三个参数:
●type: 事件类型字符串,比如click、mouseover ,不带on
●listener :事件处理函数,事件发生时,会调用该监听函数
●useCapture :可选参数,是一个布尔值,默认是false。
```

```js
eventTarget .attachEvent (eventNameWithon, callback)
该方法将指定的监听器注册到eventTarget (目标对象)上,当该对象触发指定的事件时,指定的回调函数就会被执行。
该方法接收两个参数:
●eventNameWithOn :事件类型字符串,比如onclick、onmouseover ,这里要带on
●callback :事件处理函数,当目标触发事件时回调函数被调用

```

##### DOM事件流

从页面接收事件的顺序

三阶段：捕获阶段、当前目标阶段、冒泡阶段

// 1.JS代码中只能执行  捕获   或者  冒泡  其中的一个阶段。

// 2.onclick和attachEvent (ie)只能得到冒泡阶段。

3. addEventListener (type, listener [, useCapture] )第三个参数如果是true ,表示在事件捕获阶段调用事件处理程序;

如果是false (不写默认就是false) , 表示在事件冒泡阶段调用事件处理
程序。

4. 实际开发中我们很少使用事件捕获,我们更关注**事件冒泡**。

5. 有些事件是没有冒泡的,比如onblur. onfocus、 onmouseenter. onmouseleave

##### 事件对象

```js
var div = document.querySelector('div');
div.onclick = function(event){
	console.log(event);
}
div.addEventListener('click',function(e){
    console.log(e);
})
```

1. event / (e) 是一个事件对象  写到我们侦听函数的小括号里面  当形参来看
2. 事件对象只有 有了事件 才会存在，它是系统给我们自动创建的，不需要我们传递参数
3. 事件对象是我们事件的系列相关数据的集合  跟事件相关的
4. 事件对象可以自己命名，一般用e
5. 兼容性问题

![image-20220817224216922](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220817224216922.png)

**e.target和this的区别**

e.target 返回的是触发事件的对象（元素）,点击谁就返回谁

this返回的是绑定事件的对象，谁绑定就返回谁

**阻止默认行为**

让链接不跳转  让提交按钮不提交

```js
var a = document.querySelector('a');
a.addEventListener('click',function(e){
    e.preventDefault();
})
```

**阻止事件冒泡**

```js
e.stopPropagation();
```

**事件委托（代理、委派）**

 事件委托的核心原理：给父节点添加侦听器，利用事件冒泡影响每一个子节点

##### 常用鼠标事件

**禁止鼠标右键菜单**

```js
// 禁止选中文字（禁用右键菜单）
document.addEventListener('contextmenu',function(e){
    e.preventDefault();
})

// 禁止选中文字
document.addEventListener('selectstart',function(e){
    e.preventDefault();
})
```

**鼠标事件对象**

![image-20220818224346524](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220818224346524.png)

重点记pageXY

##### 常用键盘事件

三个事件执行顺序：down ----->  press ----> up

![image-20220818230800497](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220818230800497.png)

keyCode 返回按下按键的ASCII码值

1.keyup和keydown不区别大小写，得到ASCII值都为65

2.keypress 区分大小写 

#### BOM

BOM和DOM的区别

![image-20220821215632652](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220821215632652.png)

BOM比DOM更大，包含DOM

###### BOM构成

**window对象**是浏览器的顶级对象,它具有双重角色。

1.它是JS访问浏览器窗[的一一个接口。

2.它是一一个全局对象。定义在全局作用域中的变量、函数都会变成window对象的属性和方法。

在调用的时候可以省略window ,前面学习的对话框都属于window对象方法,如alert0、prompt0等。

注意: window下的一个特殊属性   window.name

##### window对象常见事件

###### 窗口加载事件

```js
window.onload = function(){};
或
window.addEventListener('load',function(){});
或
document.addEventListener('DOMContentLoaded', function() {})
```

window.onload是窗口(页面)加载事件   当文档内容完全加载完成    会触发该事件(包括图像、脚

本文件、CSS文件等),就调用的处理函数。

DOMContentLoaded事件触发时,仅当DOM加载完成,不包括样式表,图片Mflash等等。ie9以上支持（如果页面图片过多，适合用这种方法）

###### 调整窗口大小事件

```js
window.addEventListener('resize',function(){})
```

1.只要窗口大小发生像素变化,就会触发这个事件。

2.我们经常利用这个事件完成响应式布局。window.innerWidth是当前屏幕的宽度。

###### 定时器

```js
setTimeout(function(){},毫秒数);
只调用一次
```

1.setTimeout()方法这个window在调用的时候可以省略

2.这个延时时间单位是毫秒但是可以省略，如果省略默认的是0

3.这个调用函数可以直接写函数  还可以写函数名

4.页面中可能有很多的定时器，我们经常给定时器加标识符(名字)

总结：setTimeout()这个调用函数我们也称为回调函数callback，时间到了才回头调用这个函数

```js
window.setInterval(回调函数，[间隔毫秒数]);
重复调用一个函数，每隔多少毫秒数，就调用一次回调函数。
```

1. window可以省略。
2. 这个调用函数可以直接写函数,或者写函数名或者采取字符串‘函数名0'三种形式.
3. 间隔的毫秒数省略默认是0 ,如果写,必须是毫秒,表示每隔多少毫秒就自动调用这个函数。
4. 因为定时器可能有很多, 所以我们经常给定时器赋值一一个标识符。

###### 停止定时器

```js
clearTimeOut(定时器名字);
clearInterval(定时器名字);
```

###### this指向问题

1.全局作用域或者普通函数中this指向全局对象window

注意定时器里面的this指向window

2.方法调用中的this指向函数调用者

3.构造函数中this指向构造函数的实例

###### js执行机制

单线程，同一个时间只能做一件事

**同步和异步**

同步任务都在主线程上执行，形成一个执行栈

异步任务如回调函数，等待同步任务都完成之后，再放到执行栈中执行

**事件循环**

由于主线程不断的重复获得任务、执行任务、再获取任务、再执行,所以这种机制被称为事件循环( eventloop )。

##### location对象

###### 常见属性

url：统一资源定位符(Uniform Resource Locator, URL)是互联网上标准资源的地址。

互联网上的每个文件都有一个唯一的URL ,它包含的信息指出文件的位置以及浏览器应该怎么处理它。

![image-20220828220824995](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220828220824995.png)

![image-20220828220945309](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220828220945309.png)

###### location对象的常见方法

![image-20220831233933028](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220831233933028.png)

##### navigator对象

navigator对象包含有关浏览器的信息,它有很多属性,我们最常用的是userAgent 

该属性可以返回由客户机发送服务器的user- agent头部的值。

下面前端代码可以判断用户那个终端打开页面,实现跳转

```js
if((navigator.userAgent.match(/(phone|pad|iPhone)/i))){
    window.location.href = '移动端地址'
}else{
    window.location.href = 'PC端地址'
}
```

##### history对象

```js
history.forward()  前进
history.back()  后退
history.go(1/-1)  前进或者后退一步
```

