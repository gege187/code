### HTML 5新特性

###### 语义化标签

&lt;header&gt;头部标签

<nav>导航标签</nav>
  <article>内容标签</article>
  <section>定义文档某个区域</section>
  <aside>侧边栏标签</aside>
  <footer>尾部标签</footer>
###### 多媒体标签

视频《video》

<video  autoplay="autoplay" muted="mutes" controls="controls" loop="loop">
    src=""
    width：100%；
    autoplay:自动播放
    muted:静音播放
    controls:播放控件
    <!--视频经常不设置控件让他自动播放-->
    loop：循环播放
    poster：视频未加载出来前显示图片
</video>

音频《audio》

<audio src="周深 - 可它爱着这个世界.mp3" autoplay="autoplay" controls="controls" loop="loop">
</audio>

#### 表单

 <!-- 验证必须添加form表单域 -->

<form action="">
    <ul>
        <li>邮箱：<input type="email"></li>
        <li>网址：<input type="url"></li>
        <li>日期：<input type="date"></li>
        <li>时间：<input type="time"></li>
        <li>数量：<input type="number"></li>
        <li>手机号：<input type="tel"></li>
        <li>搜索：<input type="search"></li>
        <li>颜色：<input type="color"></li>
        <li>文本框：
        <input type="text" required="required" placeholder="默认文本"  					autofocus="autofocus" autocomplete="off">
        </li>
        <li>文件：<input type="file" multiple></li>
        <li><input type="submit" value="提交"></li>
    </ul>
</form>

 **属性**

required="required" ：此字段不能空白

autofocus="autofocus"：光标自动显示

autocomplete="off/on"：填写过的内容不会作为提示出现

```css
/* 修改默认文本颜色 */
input::placeholder{
    color:pink;
}
```

### CSS 3新特性

#### 属性选择器

```css
input[value]{
	1.按属性找
}
input[type=text]{
    2.按属性和值找
}
div[class^=qian]{
    3.具有class属性并值以qian开头的
}
div[class$=hou]{
    4.具有class属性并值以hou结尾的
}
div[class*=ong]{
    5.具有class属性并值中带有ong的
}
```

```html
<input type="text" value=""/>
<div class="qianzhonghou"></div>
```

###### 结构伪类选择器

###### 伪元素选择器

#### 2D转换（transform）

###### ==translate：移动==

移动盒子位置：定位		盒子外边距		2D转换

tl：不会影响其他盒子位置

​		百分比移动的距离是盒子的宽高度

​		对行内标签不起作用

```css
/* transform: translate(100px,100px); */
transform: translateX(100px);
transform: translate(100px,0);
transform: translateY(100px);
transform: translate(0，100px);
```

###### ==rotate：旋转==

加上过渡效果显示

```css
/* 顺时针旋转45度 */
transform: rotate(45deg);
```

**案例：**制作三角形

**2D转换中心点**

```css
 /* 1. 方位名词 */
 transform-origin: left bottom; 
/* 2.px像素 */
 transform-origin: 20px 20px;
```

###### ==scale：缩放==

**优势：**不会影响其他盒子，可设置缩放中心点 

```css
/* 1.倍数，一倍就是本身 */
transform: scale(2,2);
/* 括号里只有一个参数，就是等比例缩放 */
 transform: scale(2); 
/* 2.缩小,小于1就是缩小 */
 transform: scale(0.5); 
```

属性连写

同时使用多个转换：

```css
transform:translate() rotate() scale();
```

其顺序会影响转换的效果

同时有位移和其他属性时，要先写位移

#### 动画

**基本使用**

先定义后调用

```css
定义
@keyframes 名称{
    0%(from){
        
    }
    100%(to){
        
    }
}
调用
div{
    animation-name: 名称;
    /* 持续时间 */
    animation-duration: 2s;
}
```

基本属性

![image-20220506174756062](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220506174756062.png)

![image-20220506204102468](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220506204102468.png)

属性简写

![image-20220506181502339](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220506181502339.png)

```css
animation: move 2s linear 0s 1 alternate forwards;
```

注意：

简写属性不包括animation-play-state，他经常和鼠标经过等配合使用

#### 3D转换

三维坐标系

x轴**右**边是正值

y轴**下**边是正值

z轴**往外**是正值，一般单位写px

```css
 transform: translateX(100px) translateY(100px) translateZ(100px); 
/* 简写不能省略，没有就写0 */
 transform: translate3d(100px,100px,100px);
```

**透视perspective**

透视是给被观察元素的父盒子加

近大远小

==3D旋转==

```css
transform: rotateX();
transform: rotateY();
transform: rotateZ();
/* 矢量。1，1，0 就是沿对角线翻转 */
transform: rotate3d(1,1,0,45deg);
```

###### 3D呈现transform-style

给父级加代码。影响子盒子

```css
transform-style: preserve-3d;
```





###### 盒子模型内减模式

### 其他特性

###### 图片模糊处理

```css
filter: blur(3px);
```

###### 计算盒子宽度

```css
width: calc(100% - 100px);
```

###### 过渡

transition：过渡属性  花费时间  （ 运动曲线   何时开始 ）

写多个属性，利用逗号来分割。

###### 颜色渐变

背景渐变必须添加浏览器私有前缀

```css
(起始方向，粉色，蓝色)默认方向是上下
background: -webkit-linear-gradient(left,pink ,skyblue);
```





### 







