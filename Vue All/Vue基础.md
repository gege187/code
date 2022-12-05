```html
<head>
<!-- 引入Vue -->
<script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
    <div id = 'root'>
        hello {{hello}}
    </div>
    <script>
        Vue.config.productionTip = false;   //以阻止 vue 在启动时生成生产提示。
    	new Vue({
            el:#root;
            data:{
            hello:'HELLO';
        }
        })
    </script>
</body>
```

shift + 刷新键： 强制刷新

#### 初识Vue：

1. 想让Vue工作，就必须创建一个Vue实例， 且要传入一个配置对象:
2. root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法:
3. root容器里的代码被称为[Vue模板] :
4. 区分js表达式和js代码
5. Vue实例和容器是一对应的:
6. 真实开发中只有一个Vue实例， 并且会配合着组件一起使用;
7. {{xxx}}中的xxx要写js表达式，且xxx 可以自动读取到data中的所有属性:
8. 一旦data中的数据发生改变，那么模板中用到该数据的地方也会自动更新:

![image-20220812103407904](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220812103407904.png)

#### 模板语法

绑定：   v-bind：  简写===>       :

Vue模板语法有2大类: 

**1.插值语法:**

功能:用于解析标签体内容。

写法: {{xxx}}, xxx是js表达式，且可以直接读取到data中的所有属性。

**2.指令语法:**
功能:用于解析标签(包括:标签属性、标签体内容、绑定事件.....)。

举例: v-bind:href="xxx" 或简写为 :href="xxx", xxx同样要写js表达式，且可以直接读取到data中的所有属性。

备注: Vue中有很多的指令，且形式都是: v-???, 此处我们只是拿v-bind举个例子。



#### 数据绑定

单向数据绑定：<input type="text" v-bind:value="msg">

双向数据绑定：<input type="text" v-model:value="msg">

Vue中有2种数据绑定的方式: 

1.单向绑定(v-bind): 数据只能从data流向页面。

2.双向绑定(v-model):数据不仅能从data流向页面，还可以从页面流向data。

备注:

1.双向绑定一般都应用在表单类元素上(如: input、 select等 )（输入类元素）

2.v- model:value可以简写为v-model,因为v- model默认收集的就是value值。



##### el和data的两种写法

**1.el有2种写法**

(1).new Vue时候配置el属性。

(2).先创建Vue实例，随后再通过vm. $mount( ' #root ' )指定e1的值。

**2.data有2种写法**
(1).对象式

(2).函数式

如何选择:目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错

**3.一个重要的原则:**

由Vue管理的两数，一定不要写箭头雨数，一且写 了箭头函数，this就 不再是Vue实例了。



##### MVVM模型

M：模型（Model）：data中数据

V：视图（View）：模板 （页面）

VM：视图模型（ViewModel）：Vue实例对象

```js
const vm = new Vue({})
```



1.data中所有的属性，最后都出现在了vm身上。

2.vm身上所有的属性及Vue原型上所有属性，在Vue模板中都可以直接使用。

![image-20220813110118984](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220813110118984.png)

![image-20220813110349538](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220813110349538.png)

#### 数据代理

通过一个对象代理对另一个对象属性进行操作（读/写）

```js
Object.defineProperty(对象，属性，{
	
	})
```

1. Vue中的数据代理:

​      通过vm对象来代理data对象中属性的操作(读/写)

2. Vue中数据代理的好处:
   
   更加方便的操作data中的数据

基本原理:

通过0bject，defineProperty()把data对象中所有属性添加到vm上。

为每一个添加到vm上的属性，都指定一个getter/setter。

在getter/setter内部去操作(读/写) data中对应的属性。

![image-20220813152735748](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220813152735748.png)

#### 事件处理

###### 事件的基本使用:

1.使用v-on：xxx或@xxx绑定事件，其中xxx是事件名: 

2.事件的回调需要配置在methods对象中，最终会在vm上;

3.methods中配置的函数，不要用箭头函数!否则this就不是vm了;

4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm或组件实例对象;

5.@click="demo"和@click="demo($event)" 效果一致，但后者可以传参:

###### 事件修饰符

1.prevent : 阻止默认事件(常用)

2.stop :  阻止事件冒泡(常用)

3.once :  事件只触发一次(常用) ;

4.capture : 使用事件的捕获模式;

5.self : 只有event .target是当前操作的元素时才触发事件；

6.passive : 事件的默认行为立即执行，无需等待事件回调执行完毕;

###### 键盘事件：

1. Vue中常用的按键别名:

​      回车=> enter

​      删除=> delete ( 捕获“删除”和“退格”键)

​      退出=> esc

​      空格=> space

​      换行=> tab (特殊，必须配合keydown去使用)

​      上=>up

​      下=> down

​      左=> left

​      右=> right

​    2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为keb.ab-case(短横线命名)

​    3.系统修饰健(用法特殊) : ctrl、 alt、shift、 meta

​      (1).配合keyup使用:按下修饰键的同时，再按下其他健，随后释放其他键，事件才 被触发。

​      (2).配合keydown使用:正常触发事件。

​    4.也可以使用keyCode去指定具体的按键(不推荐) 

​    5. Vue.config.keyCodes.自定义键名=健码，可以去定制按键别名

##### 计算属性-computed

属性：data中存放的数据就是属性，属性名和属性值

计算属性:

​    1.定义:要用的属性不存在，要通过已有属性计算得来。

​    2.原理:底层借助了objcet.defineproperty方法提供的getter和setter.

​    3. get函数什么时候执行?

​      (1).初次读取时会执行一次。

​      (2).当依赖的数据发生改变时会被再次调用。

​    4.优势:与methods实现相比，内部有缓存机制(复用)，效率更高，调试方便。

​    5.备注:

​      1.计算属性最终会出现在vm上，直按读取使用即可。

​      2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要通过 计算时依赖的数据 发生改变

##### 监视属性-watch

​    1.当被监视的属性变化时，回调函数自动调用，进行相关操作

​    2.监视的属性必须存在，才能进行监视! !

​    3.监视的两种写法:

​      (1)new Vue时，传入watch配置

​      (2)通过vm.$watch监视

​	**深度监视**

深度监视：监视多级结构中所有属性的变化

给外层监视结构中加入deep：ture

##### 绑定样式

