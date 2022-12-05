##### 服务器

远程服务器:    http://free.3v.do/

注册

FYP管理

cutftp软件

##### 浏览器私有前缀

##### 视口viewpoint

###### 布局视口 layout-viewpoint

###### 理想视口 ideal viewpoint

设备多宽，就显示多宽

需要添加meta标签

###### meta视口标签

##### 二倍图

###### 物理像素&物理像素比

物理像素就是分辨率

PC端，一个px等于一个物理像素，移动端不尽相同

一个px能显示的物理像素点的个数，称为物理像素比

将一张在PC端显示为100*100的图片，压缩为50**50的大小，在移动端放大二倍就是原来的大小

###### ==多倍图==，原理如上

###### 背景缩放background-size

图片缩放：给图片加宽高

背景图片缩放：bgsize

###### ==二倍精灵图的做法==

1.把整个精灵图缩小为原来的一半

2.测量缩放后的图标坐标

2.在代码中bgs将背景图宽度缩放一半

#### 移动端开发选择

单独制作

响应式页面兼容移动

##### 盒子模型box-sizing

如果不考虑兼容性，就可以使用

##### 特殊样式

清除a标签背景高亮： -webkit-tap-highlight-color: transparent;

边框样式：-webkit-appearance: none;

禁用长按页面时的弹出菜单：-webkit-touch-callout: none;

#### 移动端技术选型

![image-20220507194907636](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220507194907636.png)

### 常见布局

#### 流式布局（百分比布局）

#### flex布局

（移动端更好）（携程案例）

布局简单

兼容较差

##### 布局原理

父容器和子项目

给父容器添加flex属性，来控制子盒子位置和排列方式

<img src="C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220521191042165.png" alt="image-20220521191042165" style="zoom: 67%;" />

##### 父项属性

```css
主轴：x 行 row
侧轴：y 列  
/* 设置主轴方向 */
flex-direction: ;
row / row-reverse / column / column-reverse
/* 设置主轴上的子元素排列方式 */
justify-content: ;
flex-start / flex-end / center / space-around / space-between
从左往右   从右往左    居中   平分空间    两边贴边再平分剩余空间
/* 设置子元素是否换行 */
flex-wrap: ;
wrap
换行
/* 设置侧轴子元素的排列方式（多行），单行无效 */
align-content: ;
center / flex-start / flex-end / flex-between / space-around
/* 设置侧轴上的子元素排列方式（单行使用） */
align-items: ;
center stretch 
侧轴（y）居中  从上往下  从下往上  stretch（拉伸，子盒子不给高度）
/* 同时设置direction(主轴)和wrap（自动换行） */
flex-flow:row wrap ;
```

子项属性

flex属性：分配剩余空间，数字是占多少份

```css
flex: 1; /* default 0;*/
```

align-self属性

```css
align-self: flex-end;
```

order属性

```css
/*默认0，-1比0小，即把设置的元素放在前面*/
order: -1;  
```



#### 图片格式

DPG图片压缩技术

webp图片格式



#### rem适配布局 

##### rem单位

类似于em，em是父元素字体大小，rem是相对于html元素的字体大小

优点：通过修改html里面的文字来改变页面中元素的大小，可以整体控制

```css
html{
    font-size:14px;
}
p{
    width: 10rem;
    height: 10em;
    bgc:#fff;
}
/* p显示方块大小为140px */
```

##### 媒体查询（Media Query）

```html
@media mediatype and|not|only (media feature){
            CSS-Code;
        }
mediatype:媒体类型
and|not|only：关键字
且  非（可省） 特定（可省）
media feature：媒体特性 必须有小括号包含
```

##### 媒体查询+rem实现元素动态变化

VScode： rem布局--media.html

##### 媒体查询+引入资源

针对不同的媒体使用不同的样式表，引入不同的css文件



##### Less基础

css扩展语言，扩展css的动态特性

##### Less使用

###### Less变量：

    @变量名：值；

错误的命名方式：@11c（不以数字开头）@color~#（） @@区分大小写  

###### Less编译：

插件自动生成---写成less文件后点击保存自动生成css文件---修改less文件内容css文件自动修改保存。

###### Less嵌套：

子元素直接放在父元素里写

加&，表示伪类选择器

###### Less运算

乘（*）除（/）（除法运算需要括起来）

颜色也可加减

运算符左右两侧加空格

两个数都有单位且单位不一致的情况下，以第一个单位为准。



less文件中导入样式

  ```
 @import “文件名”；
  ```

less文件自动生成css文件在less文件夹中，设置less插件扩展 ，导出css文件在css文件夹中



##### rem最终适配方案

1.先选择一套标准尺寸 以750px为准

 2.用屏幕尺寸 除以 划分的份数 得到html中文字大小  

​       (此例中是在750px尺寸下,得到50px  但不同尺寸屏幕文字大小不同 320px/15得到21.33px)

  3.rem值 = 页面元素在750px下像素值 / html中文字大小

##### 适配方案2

cssrem插件：快捷键（ctrl+，）在setting.json设置px转换为rem的默认值



#### vw 和 vh

相对单位

➢vw是: viewport width视口 宽度单位

➢vh是: viewport height 视口高度单位

相对视口的尺寸计算结果

➢1vw= 1/100视口宽度

➢1vh= 1/100视口高度

**像素---> vw**

目标像素 / (视口宽度 / 100)

像素大厨---设计图2X ---vw/【vh不常用】

##### 插件

px2vw  --- 扩展--- width : 375



#### 黑马面面项目

1.摹客  https://www.mockplus.cn/  ---下载ps插件---在ps中打开--扩展程序--摹客

2. swiper插件  https://swiper.com.cn/ 找到想要的样式---复制html、css、js代码块

3.部署到码云  码云https://gitee.com/---创建仓库---文件根目录右键---get bush here

3.1  第二种方式提交：仓库--文件--上传文件

```
get init（初始化）--

get add .

git commit -m '提交' 

git remote add origin https://gitee.com/meng_xiao_yu/dark-horse.git 
git push -u origin "master"
```

4.发布静态网站

仓库---服务---gitee pages 



#### 响应式布局开发

原理：就是使用媒体查询针对不同宽度的设备进行布局和样式的设置,从而适配不同设备的目的。

![image-20220703185108645](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220703185108645.png)

###### 响应式布局容器

响应式需要一个父级做为布局容器 ,来配合子级元素来实现变化效果。
原理就是在不同屏幕下,通过媒体查询来改变这个布局容器的大小,再改变里面子元素的排列方式和大小,从而实现
不同屏幕下,看到不同的页面布局和样式变化。



#### Bootstrap前端开发框架

###### 使用：

1.创建文件夹结构 2. 创建html骨架结构

![image-20220703235151427](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220703235151427.png)

3.引入css样式文件 

4.内容： 1.利用class类名使用预定好的样式 2. 修改样式，权重和层叠性 3.

###### 布局容器

**container类**

响应式布局的容器    固定宽度
大屏(>=1200px)宽度定为1170px
中屏( >=992px)宽度定为970px
小屏( >=768px)宽度定为750px
超小屏(100%)

**container-fluid类** 

流式布局容器   百分百宽度
占据全部视口( viewport )的容器。
适合于单独做移动端开发



###### 栅格系统

行

列 嵌套

列 偏移 col-md-offset-

列 排序 col-md-push-      col-md-pull-

**响应式工具**

hidden- xs / s / m / l   隐藏

visible- xs / s / m / l      显示

![image-20220716132102160](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220716132102160.png)