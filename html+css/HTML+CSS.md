HTML+CSS

### Typora方法

```
页面内跳转：
1.	Ctrl+k
	###一到六级标签
	[要跳转的说明](#一到六级标签)
2.	文本内容可跳转
	<a name="文本"></a>
	[要跳转的说明](#文本)
	
可以添加emoji表情
```

### 认识VSCode



#### SEO搜索引擎

```html
<head>
<meta name="description" content="小图线网站">
<meta name="keywords" content="夏鸥笑,打击盗版,迪斯科"><!--英文逗号-->
<title>标题</title>  <!--建议：网站名-简洁介绍不超过30字-->
<!-- 小图标，和index.html放在同级文件夹-->
<!--输入link，找fav-->
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
</head>
```

#### 快捷键

    注释 Ctrl+/
    
    直接换行：Ctrl + /
    
    多内容修改：Ctrl + D（对元素有用，按下d选中一个，按住不放全选）
    
    多行下拉光标(相同位置)：Shift + Alt -->鼠标按住不放下拉
    
    多个光标(任意地方)：Alt
    
    向下复制当前行：Ctrl + Shift + 下箭头
    
    格式化代码 Ctrl + shift + F

#### Emmet语法

1.快速生成HTML结构语法

```html
 	<!-- 直接写.red自动生成div类选择器 -->
    <div class="red"></div>
    <!-- 直接写#red自动生成div id选择器 -->
    <div id="red"></div>
    <!-- 写p.red生成p 类选择器 -->
    <p class="red"></p>
    <!-- 写p.red#red同时生成类选择器,id选择器 -->
    <p class="red" id="red"></p>
    <!-- 同级加号div+p -->
    <div></div>
    <p></p>
    <!-- 子集大于号ul>li -->
    <ul>
        <li></li>
    </ul>
    <!-- 实现多个用乘号* h6*3 -->
    <h6></h6>
    <h6></h6>
    <h6></h6>
    <!-- 添加文本内容ul>li{内容} -->
    <ol>
        <li>我是内容</li>
    </ol>
    <!-- 文本内容实现递增ol>li{$}* -->
    <ol>
        <li>1a</li>
        <li>2a</li>
        <li>3a</li>
    </ol>
	<!-- $符号排序 -->
	.sss$*5
	<div class="sss1"></div>
    <div class="sss2"></div>
    <div class="sss3"></div>
    <div class="sss4"></div>
    <div class="sss5"></div>
	div{$}*5
	<div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
```

2.快速生成css样式

```html
w100+h100+bgc

```



### 需要清除的样式大概

<!--清除默认内外边距-->

<a name="清除默认内外边距"></a>

    *{
    
    margin: 0;
    
     padding: 0;
    
    }

<!--內减模式--> 

    * {
    
      box-sizing: border-box;
    
    }



<!--设置网页统一的字体大小、行高、字体系列相关属性，根据需要设置，此项不唯一--> 

    body {
    
     font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    
      "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    
     color: #333;
    
    }



 <!--去除列表默认样式--> 

    ul,
    
    ol ,
    
    dl{
    
     list-style: none;
    
    }



<!--去除默认的倾斜效果--> 

    em,
    
    i {
    
     font-style: normal;
    
    }



<!--去除a标签默认下划线，其他样式需要对单独a标签设置，设置父级不生效--> 

    a {
    
     text-decoration: none;
    
    }



<!--设置img的垂直对齐方式为居中对齐，去除img默认下间隙--> 

    img {
    
     vertical-align: middle;
    
    }



<!--去除input默认样式--> 

    input {
    
     border: none;
    
     outline: none;
    
    }



<!--左浮动，直接调用类名添加给需要修改的标签-->

    .fl {
    
     float: left;
    
    }



<!--右浮动--> 

    .fr {
    
     float: right;
    
    }



<!--双伪元素清除法--> 

<a name="双伪元素清除法"></a>

```css
.clearfix::before,

.clearfix::after {

     content: "";

     display: table;/*插入元素必须是块级,并在一行显示*/
     
    /* height:0;不让看见这个元素，这两行可以不加
    
     visibility:hidden;*/

}

.clearfix::after {

	 clear: both; /*在所有元素后边插入块级元素清除浮动*/

}
```

## HTML

### 基础标签（经常用）


```html
标题<h></h>
换行<br />

水平线<hr />

空格符&nbsp;
小于号&lt;
大于号&gt;

段落<p></p>

块级标签<div></div>

行内标签<span></span>
```

**超链接**

```html
<a href= "http://www.qq.com">腾讯</a>（外部链接）

<a href="目标网页.html" target="_blank">超链接</a>(内部链接)
[^ target="_blank"]:加载新窗口，不加默认覆盖本窗口显示

<a hrf="#"></a>(空链接)

<a href="文件或压缩包">会下载这个文件</a>
```

<img src="C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220410150616723.png" alt="image-20220410150616723" style="zoom: 67%;" />

**图片**

```html
<img src="图片路径.jpg" alt="替换文本" title="鼠标悬停时出现">
  	
  	绝对路径'\'

    相对路径：
        同级(./)
        下级(./)文件夹/
        上级../
```

			    路径      音频控件      自动播放   循环播放
<audio src="音频路径.mp3" controls autoplay loop></audio>
<video src="音频路径.mp4" controls autoplay loop></video> 
### 文本格式化标签

```html
加粗<b><strong>
下划线<u><ins>
倾斜<i><em>
删除线<s><del>
[^建议用后者]
```

### 语义标签

```html
<header>网页头部</header>
<nav>网页导航</nav>
<aside>网页侧边</aside>
<section>网页区块</section>
<article>网页文章</article>
<footer>网页底部</footer>
```

### 功能标签

#### 列表

```html
有序列表<ol><li></li></ol>

无序列表<ul><li></li></ul>

自定义列表
	<dl>
        <dt>名词</dt>
        <dd>名词解释1</dd>
        <dd>名词解释2</dd>
	</dl>
```

#### 表格 &lt;table&gt;

```html
属性：
	宽高
	边框 <table border="1">
        cellpadding:单元边沿（框）与内容（字）之间的空白
        cellspacing：单元格（框）之间的空白
        border-collapse: collapse;设置行和单元格的边合并
    对齐方式align：center 在浏览器页面水平居中
    
 <caption>

行 <tr>    表头<th>默认文字加粗, 居中        列 <td>

<tr>   <th><th>    <tr>

<tr>   <td><td>    <tr>

跨行  ：colspan=“所跨行数”，只写加属性的那一列

<!--colspan: 跨行发生在一行之中，所以是一行当中几个<td>/<th>可以省略，只写第一个-->

跨列   ： rowspan=“所跨列数”，写加属性的那列

<!--rowspan]: 跨列是在几行中，所以有n-1行<tr>都缺少一列<td>/<th>-->
```

###### （结构标签，看起来更整齐规范，可以不写）

```html
<table>
    <thead>

    <tbody>

    <tfoot>
</table>
```

#### 表单 &lt;form&gt;

```html
<form action="" method="POST/get" name="name1">
    
</form>
```

##### &lt;input输入元素&gt;

[^ type属性=]:文本框text、密码框password、单选框radio、复选框checkbox、文件file、
[^常用属性]:name名称、value值、checked默认选中、maxlength输入字符最大值
[^按钮]:自动提交submit、普通按钮、重置

```html
<input type="text" placeholder="占位符" >文本框 <br />
<input type="text" name="username" value="框内显示">文本框 <br />
<input type="password">密码框    <br />

<input type="radio" name="one">只能选一个
<input type="radio" name="one" checked>只能选一个

<!--name属性: 必须要有，相同名字为一组，只能选一个-->
<!--checked属性: 默认选中当前框-->

<input type="checkbox">多选
<input type="checkbox">多选
<input type="checkbox" checked>多选

<input type="file" multiple>文件

<!-- 按钮要配合form表单用 -->
<!-- 要想提交按钮可以使用，必须把表单内容放在<form>（父级标签）内，作为一个整体提交 -->
    <form action="xxxx.php" method="get/post" >    
        文本框：<input type="text" placeholder="输入用户名"><br><br>
        密码框：<input type="password" placeholder="输入密码"><br><br>
        <input type="submit" value="免费注册">
        <input type="reset">
        <input type="button" value="普通按钮">配合js使用 
    </form> 
```

##### &lt;button&gt;

```html
<button type="button">按钮</button>
<button type="submit">提交</button>
<button type="reset">重置</button>
```

##### 下拉菜单&lt;select&gt;

&lt;option&gt;

```html
内容：<select name="" id="">
    <option value="" selected></option>
    <option value=""></option>
    <option value=""></option>
</select>
<!-- selected:默认选中当前选项 -->
```

##### 文本域&lt;textarea&gt;

去掉聚焦边框：outline：none;

<textarea name="" id="" cols="15" rows="5">默认会显示这行字</textarea>
##### &lt;label&gt;标签

```html
<input type="radio" name="qita" id="ha"><label for="ha">你</label>

<label ><input type="radio">我</label>

<input type="radio" name="qita">他

<!--
label实现在标签区域内点击都能选中框，例如，“你，我”；“他”不能
label标签两种使用方法：
第一个见“你: 在<input>中添加属性id="唯一"，在<input>内写label标签，给label标签添加for="唯一"
第二个见“我 : 将label标签放在<input>外边，不用添加其他内容
另外：
name属性: 拥有name属性值一致的两个内容为一组，只能选中一个：'你''他'  -->
```
## CSS

### 引入方式

```html
**内嵌式**

在<title>下写上<style>标签，在<style>中写css样式

**外联式**

css单独写在.css文件当中，在html文件中链接

<link rel="stylesheet" href="./one.css">     [.html和one.css同级]

**行内式**

主要配合js使用，在标签中添加style=""
    <p style="color=red;">p标签</p>
```
### css选择器

**语法规范**

```html
<head>
    <title></title>
    <style>
        css {
            xx: xx;
            xx: xx;
        }
    </style>
</head>
```

#### 基础选择器

**标签选择器**

```html
<p></p>,<span></span>,<div></div>,<h1></h1>,<h2></h2>....
```

**类选择器**

一个标签可以有多个类名

```html
.red{
    color: blue;
}
.size{
    font-size: 24px;
}

<div class="red size">类选择器</div>
```
命名规则

尽量选择英文单词，不会可以用拼音全拼

header头部     nav导航   aside侧边栏     footer底部   



**id选择器**

唯一，在当前文件中

    #a{
        color: yellow;
    }
    
    <div id="a">id选择器</div>
**通配符  *{}**

未受样式控制的内容都属于通配符



#### 复合选择器

**后代选择器**

父级标签与后代（好多代）之间用空格隔开

元素1   元素2 {样式声明}



**子代选择器**

父级标签后只能跟子代标签，用>隔开（有孙子辈的也不管用）

元素1>元素2 {样式声明}



**并集选择器**

同级标签之间用逗号隔开

元素1, 元素2 {样式声明}

多个内容同时适用一个样式，用并集



<!--交集选择器-->

<!--同时满足多个选择器的标签，中间不加内容，不太会用-->

**链接伪类选择器**

按照顺序写

```html
a:link{
	选择未被选择过的链接
}
a:visited{
	选择点击过的链接
}
（常用）a:hover{
	选择鼠标经过的链接
}
a:active{
	选择按下鼠标还没有弹起鼠标的链接
}
```

**focus伪类选择器**

```html
input:focus {
	bgc:pink;
	color:red;
}
```

#### 伪类选择器

![结构伪类选择器](C:\Users\86137\Desktop\code\3.24第一阶段\结构伪类选择器.png)

:nth-child(n):括号内写n，说明选中了所有的孩子

![image-20220428201747786](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220428201747786.png)

**二者区别**

前者找到父元素后，把子元素都排列序号，先看找第几个孩子，再看子元素名称（E）

后者找到父元素后，先看子元素（E），给子元素的孩子排列序号，再找孩子



<img src="C:\Users\86137\Desktop\code\3.24第一阶段\选择器公式.png" alt="选择器公式" style="zoom:80%;" />

#### 伪元素

权重和标签选择器一样，为1

```css
.lei :: before{
	content:''
}

.lei :: after{
	content:''
}
```

 使用场景







### CSS特性

**继承性**

子元素默认继承父元素

文字控制属性都可以继承，不是文字来控制的都不能继承

**失效情况**：a、本身具有的样式标签作为子元素不继承父级元素样式



**层叠性**

样式一致，后边覆盖前边

样式不一致，都作用

**样式冲突时**，选择器优先级相同时，才有层叠关系的判断



**优先级**

body<标签选择器<类选择器<ID选择器<行内样式<！important

继承权重最低，即使有 ！important 也不能权重最高

如果都是继承关系，看继承哪个父类（就近原则）这个父级就高，选择器生效

权重叠加：行内>id>类>标签



### 元素显示模式

**块级元素**

独占一行，宽度默认父元素高度，高度为自身高度，可以设置宽高 ,  内可以放行内或行内块

```html
 div、p、h、ul、li、dl、dd、form、header、nav、footer
```

**行内元素**

一行多个，宽高都是自身内容撑开，不可以设置宽高，放行内或文字

```html
a、span、b、u、strong、ins、em、del
```

**行内块元素**

一行多个，可以设置宽高，内外边距

```html
input、textarea、button、select、img
```

**转换**

display：block

display：inline-block（常用）

display:inline（不常用）

[注意事项](#注意/问题)




### 样式

后写的样式会覆盖前一个

#### 复合属性：

<a name="复合属性"></a>

想要简写必须有两个属性值，字体必须有size 和 family

```html
字体 font : style  weight  size/line-hieght  family
		    italic  700 		30px 		 黑体;（空格隔开）
ex:  font:14/1.5 ---字体大小14，行高14*1.5
```


​    
​    背景 bg：color，image（url） repeat attachment  position/size



#### 字体：

    给body加字体样式
        font-family：字体样式：'Microsoft Yahei',
    
        font-size：字体大小  
    
        font-weight：字体粗细
    
        ​			bolder/bold   ；数字 400/600...（不加px）
    
        font-style：italic字体倾斜
        很少用，一般让倾斜文字不倾斜

[字体属性连写](#复合属性)



#### 文本

    color 文字颜色 1.十六进制 2.rgba（0，0，0，0~1）  3.rgb  4.英文颜色
    
    text-indent：首行缩进 2em/数字 ：缩进2字符， 
    
    text-align：水平对齐
    			适用元素：文本，span，a，input，img。
    
    text-decoration：文本修饰
    				 underline下划线  line-through 删除线    overline上划线
    
    line-height ：行高
    			  数字   /    倍数
    			  
    text-shadow ： 文字阴影 



#### 背景 

    bgc 背景颜色 rgba（0，0，0，0——1）背景半透明
    
    bgi 背景图片
        和img相比，放不重要的图，美化界面
        
    bgsize 图片缩放
            1.数字 2.百分比 3.cover覆盖整个盒子  4.contain 默认值，等比缩放
    
    bgrepeat 背景平铺
    
        repeat-x：水平平铺
    
        repeat-y：垂直平铺
    
    bgposition 背景位置  
    			left/right    top/bottom  英文单词可以颠倒次序，数字不能颠倒
                right/50px 只写一个，水平靠右，垂直方向默认居中
                top/50px  水平默认居中，垂直方向靠上
                50px          center  混合单位，一个数值一个英文，先x后y
                
    bgattachment: 背景图像固定
    			scroll/fixed
    
    属性连写（顺序）：color image（url） repeat  attachment  position/size

[复合属性](#复合属性)





#### 盒子模型

边框、内边距、外边距会撑大盒子  

 自动减去被撑大盒子宽高：box-sizing：border-box；

**边框border**

```html
border: 1px solid   red
			dashed
			dotted
border-top: -right: -bottom: -left:  四个值
```

​	表格边框

```html
合并单元格边框
border-collapse:collapse;
```

**内边距padding**

```html
padding-top: -right: -bottom: -(right)三个值
```

如果盒子本身没有指定width/height属性，此时pading不会撑开盒子大小



**外边距margin**

```html
margin:top rigth (top) (right)两个值
```

块级盒子水平居中：1.必须有宽度2.左右外边距设置为auto

```html
margin: 0 auto;
```

行内或行内块水平居中：给父级元素添加text-aligh：center；

​				合并：两个margin值取其中一个最大值，不会叠加

​				塌陷：子元素设置margin值导致父元素跟着移动

​				<a name="塌陷"></a>

​				 解决塌陷问题 

1. ​		给父元素加边框，颜色设置为transparent。
2.  	   给父元素加上padding-top
3. ​	    给父元素加overflow: hidden; 
4. ​        把子元素设置成行内块元素 ， 设置浮动 


[清除默认样式代码](#清除默认内外边距)



**box-shadow 盒子阴影** 



#### 浮动

**特点**：

​		1.不占标准流的位置

​		2.浮动元素会覆盖标准流

​		3.多个浮动元素会紧挨着左右显示

​		4.具有行内块特性，可以设置宽高

​		5.浮动元素常搭配标准流的父元素



**效果**：

<a name="浮动效果"></a>

1. 浏览器在解析行内或行内块元素时，如果标签换行，会产生一定的间距 
2.  父子级标签，子标签浮动，父标签没有高度，不占标准流，后边的元素会显示到上边的位置 

**清除浮动带来的影响**：

<a name="清除浮动"></a>

​		1.在浮动元素末尾添加一个空的标签，必须是块级标签

```html
<div style="clear:both"></div>
```

​		2.clear：both

```html
.clearfix::after{
	content:'';
	dispaly:block;
	clear:both;
}
.clearfix{
    <!--IE6、7专用-->
	*zomm:1;
}
#给body中的标签直接添加clearfix类
```

​		3.after单伪元素（以上）

​		4.[双伪元素](#双伪元素清除法)

​		5.给父元素样式加overflow：hidden；缺点：无法显示溢出的部分



#### 定位

```html
position:static
position:relative
	不脱标，占位置，仍然保留原来位置
position:absolute
	父级未定位：按浏览器窗口
	父级定位：按父元素位置
	脱标，不占原来位置，脱离标准流
	top:20px;
	left:20px;
position:fixed 固定
	1.不占位置 2.定位参照浏览器窗口 3.具备行内块特点
	固定在版心右侧：
		固定定位盒子走到浏览器一半位置，left：50%
		再走版心宽度一半，margin-left：版心一半
position:sticky；

	1.占原来位置  2.定位参照浏览器窗口 3.必须添加上右下左其中一个才有效
```

 **子绝父相**

相对定位（父级元素）占位置，绝对定位（子级元素）不占位置，浮在父元素上方显示

**定位叠放顺序**

z-index：数值越大，越靠上

​	不能加单位，只有定位的盒子才有这个属性

<a name="定位"></a>

绝对定位的盒子不能适用左右居中的margin

​	 		水平居中：left：50%   ；    margin-left ： - 盒子宽度一半

​			 垂直居中：top：50%   ；    margin-top：  - 盒子高度一半

<!-- 到这里内容还不算居中，大概在十字右下位置的左上角，需要添加一行代码 -->

<!--跟着pink老师学的可以居中，不需要添加下列代码-->

​			 transform: translate(-50%,-50%);

```html
    position:absolute;
    left：50%   ;
    top：50%   ;
    transform: translate(-50%,-50%);
```

 特性：

1.行内元素设置绝对或固定定位，可以设置宽高

2.块级元素添加绝对或固定定位，如果不给宽高，默认则是内容大小

**浮动元素**不会压住下面标准流的文字

**绝对定位**会压住下面标准流所有的内容



#### 网页总结布局

1.标准流

垂直的块级盒子显示就用标准布局

2.浮动

多个块级盒子水平显示就用浮动布局

3.定位

如果元素自由在某个盒子内移动就用定位布局



#### 装饰

###### 圆角    

```css
  border-radius: 10px;
  正圆：50%
  胶囊： 高度一半
  border-top-left-radius:10px;
  border-bottom-right-radius:10px
```



###### 光标形状

```css
 cursor: pointer;小手
 cursor: text   文本
 cursor: move   移动
 cursor: not-allowed 禁止
```



###### 表单轮廓线

```css
input{outline:none;}
```

###### 文本域防拖拽

文本域标签最好放在一行上

```css
textarea{resize:none}
```



###### 透明

    opacity ：0~1
    
    rgba（0，0，0，0~1）



###### 元素的显示与隐藏

visibility: hidden ；隐藏元素，占有原来位置

​				visible ； 可视

**display：none（配合悬停效果使用）隐藏对象，不占有原来位置**

​				  block，除了转换为块级元素之外，还有显示元素的意思

```css
.p1{
	position:relative
	width: 100px;
    height: 100px;
    background-color: #de4;
}
.p2{
	position:absolute
	/*设置成none会消失，并且不占位置*/
	display:none;
	width: 100px;
    height: 100px;
    background-color: #ddeeaa;
}
.p1:hover .p2{
	/*鼠标指到p1时，出现p2*/
	display:block;
}
```

```html
<div class="p1">
	<div class="p2"></div>
</div>
```

###### overflow溢出元素隐藏显示

```html
overflow:auto;自动显示滚动条
overflow:hidden;隐藏溢出
overflow:scroll；显示滚动条
```

如果有定位的盒子，要慎用overflow:hidden;因为他会隐藏多余的部分。



###### 垂直居中对齐vertical-align：middle

1. 图片和文字之类的**行内或行内块元素**垂直对齐用vertical-align：middle
2. 行内或行内块元素浏览器默认基线对齐，把行内或行内块元素dispaly：block
3. 图片（子级）在盒子（父级）里居中：盒子添加高和行高，给图片添加...middle



###### 解决图片底部默认空白缝隙问题

图片底部有缝隙，是因为行内块元素默认与文字基线对齐

解决：

1.给图片添加vertical-align：middle|top|bottom等 （提倡）

2.把图片转换成块级元素



###### text-shadow文字阴影

```css
<!--水平     垂直    模糊度      颜色  -->
text-shadow: 2px 2px 10px rgba(0,0,0,.3)
```



###### box-shadow 盒子阴影 

```css
<!-- 水平  垂直   模糊度   阴影扩大  阴影颜色   内部阴影inset    -->
								rgba
box-shadow: 2px 3px 10px 10px pink;
```
###### 过渡

```css
.p{
	background-color:#ccc;
	transition: background-color 2s,width 2s;
	/*需要设置的样式多的时候用*/
	transition:all 2s;
}
.p:hover{
	background-color: #3eb6b6;
    width: 120px;
}
```

###### 精灵图

1.加宽高2.背景图3.找位置

放在行内标签中

```css
width: 80px;
height: 80px;
background-image: url(bottom01.jpg);
background-position: -20px -20px;
<!--简写-->
background：url(bottom01.jpg) no-repeat -20px -20px 
```

###### 字体图标

下载：icomoon.io

​			阿里巴巴字体图标库

引入：下载包中的fonts文件夹放在页面根目录下

​			把下载包中的style.css中的字体声明引入

​			写一个span标签，放入字体图标后的小方框

​			给span标签添加字体样式，‘icomoon’

追加：把压缩包中的json文件重新上传，选中自己想要的图标，重新下载压缩包，替换原来的

###### 三角效果

```css
向下箭头
width: 0;
height: 0;
border: 10px solid transparent;
border-top-color:  pink;
/*line-height:0;
font-size:0;
照顾兼容性*/
```

###### 直角三角

```css
.thr{
    width: 0;
    height: 0;
    border-top: 100px solid transparent;
    border-bottom: 0px solid none;
    border-left: 0px solid none;
    border-right: 50px solid pink;
    /* 
    border-color: transparent pink transparent transparent;
    border-style: solid;
    border-width: 100px 50px 0 0; 
    */
}
```



###### 溢出文字省略号显示

**一行显示**

/* 1.文字放不下也强制在一行显示 */
    white-space: nowrap;
    /* 2. 溢出文字隐藏 */
    overflow: hidden;
    /* 3. 溢出文字用省略号代替 */
    text-overflow: ellipsis;

```css
div{
    width: 100px;
    height: 100px;
    background-color: pink;
    /* 文字放不下也强制在一行显示 */
    white-space: nowrap;
    /* 溢出文字隐藏 */
    overflow: hidden;
    /* 溢出文字用省略号代替 */
    text-overflow: ellipsis;
}
```

```html
<div>这个地方显示好多字，用省略号代替</div>
```

**多行显示**

了解，建议后台写



#### 布局技巧

###### **利用margin负值实现边框线的覆盖**

margin-left：-1px；

**鼠标经过时，显示边框****

 1.如果盒子没有定位，添加相对定位即可 

​      position: relative;

 2.如果盒子有定位，提高层级即可 

​      z-index: 1;

###### 文字环绕图片

```css
.two{
    margin: 0 auto;
    width: 300px;
    height: 100px;
    background-color: #ccc;
}
.two img{
    float: left;
    margin-right: 5px;
    height: 100px;
}
```

```html
<div class="two">
    <img src="0-long.jpg" alt="">
    <p>long文字环绕图片long文字环绕图片
        hao文字环绕图片shuai文字环绕图片.</p>
</div>
```





### 注意/问题



**书写顺序**

![image-20220412194357111](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220412194357111.png)

**层级关系**

    小标签不能嵌套大标签
    
    p和h不能相互套
    
    p里不能套div
    
    a不能套a

**居中问题**

```html
1.行内或行内块：给父级元素添加
	text-align:center 水平居中
    height = line-height 垂直居中
2.块级元素
	margin：0 auto；水平居中/版心居中
```

[绝对定位的盒子不能适用左右居中的margin](#定位)

[清除浮动带来的影响](#清除浮动)

[浮动会产生一定的间距](#浮动效果)

[外边距塌陷问题](#塌陷)





行内元素设置==上下边距不生效==

==加固定定位==的盒子必须有宽度

==固定定位==的元素不能使用左右居中的margin：

left：50%

transform：translateX（-50%）

==input中value属性与placeholder属性的区别==

value：给定内容，占位置

placeholder：输入时默认文字会消失

写==margin：auto==生效元素必须为块级元素

子元素无法==居中==就给父元素加

列之间在不加内外边距情况下留下的==空白缝隙==

给元素设定 padding-left值

在父盒子中嵌套一个小盒子 ，小盒子宽度为100% ， 撑满父盒子留下右侧空白部分