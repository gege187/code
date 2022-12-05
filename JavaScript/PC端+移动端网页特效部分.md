#### 元素偏移量offset系列

###### 概述：

利用offset系列相关属性可以动态得到该元素的位置（偏移）、大小等

●获得元素**距离**   带有定位父元素的位置

●获得元素自身的**大小**   (宽度高度)

●注意:返回的数值都不带单位

###### 属性

```js
element.offsetParent
返回该元素的带有定位的  父级元素    如果父级都没有定位则返回body
element.offsetTop
返回元素 相对带有定位父元素  上方的偏移
element.offsetLeft
返回元素 相对带有定位父元素   左边框的偏移
elementoffsetWidth
返回自身  包括padding、边框、 内容区的宽度，返回数值不带单位
element.offsetHeight
返回自身  包括padding、边框、内容区的高度,返回数值不带单位
```

###### offset与style的区别

![image-20220901184632803](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220901184632803.png)

###### 在页面中实现拖拽的原理

鼠标按下（mousedown）并且移动（mousemove），之后松开鼠标（mouseup）

事件源是移动框的头部部分

###### 实现放大镜效果

给小图加遮罩，右侧放置一张大图，控制大图的位置与小图的位置成反方向

#### 元素可视区client系列

使用client系列的相关属性来获取元素可视区的相关信息。

通过client系列的相关属性可以动态的得到该元素的边框大小、元素大小等。

###### 属性

```js
element.clientTop
返回元素上边框的大小
element.clientLeft
返回元素左边框的大小
element.clientWidth
返回自身包括padding、内容区的宽度,不含边框，返回数值不带单位
element.clientHeight
返回自身包括padding、内容区的高度， 不含边框，返回数值不带单位
```

###### 立即执行函数

```js
(function(){})();
(function(){}());
```

###### pageshow()方法

重新加载页面事件

#### 元素scroll系列

###### 属性

动态得到该元素的大小、滚动距离等

```js
element.scrollTop
返回被卷去的上侧距离,返回数值不带单位
element.scrolleft
返回被卷去的左侧距离，返回数值不带单位
element.scrollWidth
返回自身实际的宽度，不含边框，返回数值不带单位(得到内容的实际大小)
element.scrollHeight
返回自身实际的高度，不含边框，返回数值不带单位(得到内容的实际大小)
```

如果浏览器的高(或宽)度不足以显示整个页面时,会自动出现滚动条。当滚动条向下滚动时,页面上面被隐藏掉的高度,我们就称为页面被卷去的头部。

滚动条在滚动时会触发**onscroll事件**。

```js
element.addEventListener('scroll',function(){
	
})
```

###### 页面被卷去头部

```js
window.pageXOffset
window.pageYOffset
```



#### 三大系列总结

边框：offsetWidth：返回内容+padding+边框；     clientWidth：返回自身+padding      scrollWidth：返回自身内容

内容跟盒子大小：scroll包括超出部分；client仅盒子大小

获得元素位置：offsetLeft  、offsetTop

获得元素大小：clientWidth 、clientHeight

获得滚动距离：scrollTop、scrollLeft



###### mouseenter和mouseover的区别

over会触发包含在自身中的子盒子，enter只会经过自身时触发，enter不会冒泡



### 动画

核心原理：通过定时器setInterval()不断移动盒子位置

##### 动画函数封装

##### 封装到单独的JS文件当中

##### 缓动动画

匀速动画就是  盒子当前位置 + 固定的值

缓动（减慢）就是  盒子当前位置 + 变化的值（盒子目标位置-当前位置  / x）

加回调函数：加在定时器里边

##### 轮播图

https://www.bilibili.com/video/BV1Sy4y1C7ha?p=322&spm_id_from=pageDriver&vd_source=68b3281bbf7734b5425717a2353a38c3

###### 节流阀

节流阀目的: 当上一个函数动画内容执行完毕,再去执行下一个函数动画,让事件无法连续触发。

核心实现思路: 利用回调函数,添加一个变量来控制,锁住函数和解锁函数。

### 移动端网页特效

##### 移动端touch事件（触屏事件）

```js
touchstart 手指触摸到一个DOM元素时触发，按下触发
touchmove 手指在一个DOM元素上滑动时触发,按住移动
touchend 手指从一个DOM元素上移开时触发，弹起触发
```

##### TouchEvent触摸事件对象

```js
touches          正在触摸屏幕的所有手指的一个列表（屏幕上）
targetTouches    正在触摸当前DOM元素上的手指的一个列表 （当前触摸元素）（经常使用）
changedTouches   手指状态发生了改变的列表，从无到有，从有到无变化

```

###### 拖动原理：

手指移动的距离 + 盒子原本位置

手指滑动的位置 - 手指刚开始触摸的位置 + 盒子原本的位置

e.preventDefault(); //阻止屏幕滚动的默认行为

###### classList属性

返回元素类名，在元素中添加、移除、切换css类

```js
div.classList.add('leiming') （不用加小点点，添加而不覆盖之前的类名）
div.classList.remove('leiming')
切换类：div.classList.toggle('leiming')
```

###### 移动端click延时解决方案

问题：移动端需要判断用户是否是双击缩放问题，在300ms内是否点击两次，所以点击就会有30ms的延迟时间

解决：

1.禁止浏览器的缩放

```js
<meta name = "viewport" content="user-scalable=no">
```

2.touch事件

![image-20220918133641341](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220918133641341.png)

3.fastclick插件

##### 移动端常用插件

下载插件，打开demo实例文件，查看需要引入的相关文件，引入，复制结构html、css以及js代码

###### swiper插件

###### TouchSlider插件

###### superslide插件

视频插件：

###### zy-media.js

##### bootstrap框架

#### 本地存储

1、数据存储在用户浏览器中

2、设置、读取方便、甚至页面刷新不丢失数据

3、容量较大, sessionStorage约5M、localStorage约20M

4、只能存储字符串,可以将对象JSON.stringify()编码后存储

```js
 window.sessionStorage
```

1、生命周期为关闭浏览器窗口（关闭当前窗口）

2、在同一个窗口(页面)下数据可以共享

3、以键值对的形式存储使用

```js
window.localStorage
```

1、生命周期永久生效,除非手动删除。否则关闭页面也会存在

2、可以多窗口(页面)共享(同一浏览器可以共享)

3、以键值对的形式存储使用