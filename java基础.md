### 方法：

```java
public class Demo{
	public static void main(String[] args){
        //调用方法,先定义，后调用
        isEvenNumber();
    }
    public static void isEvenNumber(){
         int a = 10;
         int b = 20;
         if(a)
    }
    //void方法没有返回值（return）
    public static 返回值类型 方法名（参数）{
        方法体；
        return 数据；
    }
}
```

void方法没有返回值（return）；

带参数的方法

```java
public static void 方法(参数){}
public static void (数据类型 变量名){}
public static void (数据类型 变量名1，数据类型 变量名2){}
//调用
方法名(变量名/常量值)
方法名(变量名1/常量值1,变量名2/常量值2)
```

```java
public class Demo{
	public static void main(String[] args){
        //调用常量值
        isEvenNumber(10);
        //调用变量值
        int a = 10;
        isEvenNumber(a);
    }
    //带参数的方法
    public static void isEvenNumber(int a){
         if(a)
    }
    
}
```

形参：方法定义时的参数：int a

实参：方法调用中的参数：10；a；



带返回值的方法定义：

```java
    public static 数据类型 isEvenNumber(参数){
         return 数据
    }
	public static boolean isEvenNumber(参数){
         return true;
    }
	public static int isEvenNumber(int a){
         return 100;
    }
```

带返回值方法调用：

```java
数据类型 变量名 = 方法名(参数)；
boolean a = isEvenNumber(5);
```

例子：

```java
public class Demo{
	public static void main(String[] args){
        //调用方法,先定义，后调用
        boolean b = isEvenNumber(10);
        System.out.println(b);
        //或者
        System.out.println(isEvenNumber(10));
    }
    public static boolean isEvenNumber(int a){
         if(a)
    }
    
}
```



方法重载

多个方法在一个类中，具有相同方法名，参数不同，类型不同或数量不同。

```java
public class Demo{
	public static void main(String[] args){
        //调用方法,先定义，后调用
        int c = sum(10,20);
        System.out.println(sum);
        
        System.out.println(sum(10.0,20.0));   
    }
    public static int sum(int a,int b){
         return a+b;
    }
    public static double sum(double a,double b){
         return a+b;
    }
}
```

方法参数传递

```java
//基本数据类型的参数，形式参数的改变，不影响实参数值。
public class Demo{
	public static void main(String[] args){
       int a = 100;
       System.out.println(a);
       sum(a);
       System.out.println(sum);    
    }
    public static int sum(int a){
         a = 200;
    }
}
//引用数据类型参数，形参改变，影响实参。
```



### 类和对象

任何编程语言，对于变量的命名都存在不同的规范

以下介绍几种主要的命名方式:

1、下划线法  命名

​	通常用于数据库的变量命名中

​	store_name

​	goods_type

​	Java不常用



2、驼峰式命名

​	常见于Java

​	storeName

​	goodsType



​	在Java中, 

​	无论是方法还是变量，统一采用驼峰式命名

​	public List<> getStoreName(){

​	}



​	StoreName storeName = null;

​	类、接口首字母必须大写

​	int a = 0

​	int 也是一个类，不过它是固定数据类型，本质上是 Integet

​	Float

​	String



对象——类

实体——抽象

属性：成员变量

行为：成员方法

```java
public class Phone{
    //定义变量
    String brand;
    int price;
    //定义方法
    public void call(){
        System.out.println("打电话");
    }
}
```



创建对象

```java
类名 对象名 = new 类名（）；
```

使用对象

1.使用成员变量

2.使用成员方法

```java
public class Phone{
    public static void main(String[] args){
        //创建对象
    	Phone p = new Phone();
        //使用对象
        p.brand;
        p.price;
        p.call();
        
    }
}
```

成员变量：类中 方法外的变量，对象存在则存在，堆内存，有默认初始值

局部变量：方法中的变量，方法调用存在，栈内存，没有初始值



#### private：

 被封装的成员只能在本类中才能访问

如果需要被其他类使用：

提供get变量名（）方法，获取成员值，用public修饰

提供set变量名（）方法，设置成员变量值，用public修饰

```java
public class Student{
    private String name;
    private int age;
    
    public void setName(String a){
        name = a;
    }
    public String getName(){
        return name;
    }
    public void setAge(String b){
        age = b;
    }
    public String getAge(){
        return age;
    } 
}
```

```java
public class StudentText{
    Student s = new Student();
    s.setName("shezhi");
    s.getAge(22);
    s.show();
    输出；
}
```

#### this

this修饰的变量用于指代成员变量

```java
this.name = name;
```



构造方法

是一种特殊的方法，用来创建对象,完成对象数据的初始化

```java
public 类名(){}
public Student(){
    无参构造方法
}
public Student(String name,int age){
    this.name = name;
    this.age = age;
}
//测试类
Student show = new Student("名字",age);
show.show();
```



### String 字符串

```java
public String()
public String(char[] chs)
public String(byte[] bys)
String s = "abc"
```

![image-20220423195407747](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220423195407747.png)

![image-20220423195431103](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220423195431103.png)

字符串的比较

（1）使用==比较，比较地址是否相同

（2）字符串是对象，比较内容是否相同，通过一个方法来实现：equals（）；



StringBuilder构造方法

```java
	//空白字符串对象
StringBuilder sb = new StringBuilder()
    //带参数的
StringBuilder sb = new StringBuilder("参数")
```

添加和反转方法

```java
StringBuilder sb = new StringBuilder();

//sb.append("输出");
//sb.append("内容");

sb.append("继续").append("调用");
//反转
sb.reverse();
```

SB和String相互转换

```java
//SB-->s
StringBuilder sb = new StringBuilder();
sb.append("输出");
String s = sb.toString();

//S-->SB
String s = "输出";
StringBuilder sb = new StringBuilder(s);
```



### 集合基础

#### ArrayList<集合中元素类型>

ArrayList<String>

ArrayList<Student>

```java
//空集合对象
ArrayList<String> array = new ArrayList<String>();

array.add("");
//在指定位置添加元素
array.add(1,"");
```

常用方法

```java
//删除指定元素
array.remove();
array.remove(1,"");
//修改指定元素
array.set();
array.set(1,"");
//返回指定元素
array.get("");
```

### 继承

```java
public class 子类名 extends 父类名{}
```

**好处**：提高代码复用性

​			提高代码维护性

**弊端**：削弱子类的独立性

**注意事项**：不能同时继承两个父类，不支持多继承

​					支持多层继承，一层继承一层

#### super：

访问父类成员变量，和this进行比较

```java
super.变量名
```

#### 构造方法

子类：所有的构造方法都会访问父类无参的构造方法。



#### 方法重写

：子类中出现了和父类一样的方法声明

**应用：**子类需要父类的功能，同时有自己特有的内容，可以重写父类方法。

@Override注解：检查重写父类方法的方法，报错说明方法写错

**注意事项：**不能重写父类私有方法。



### 包

 ```java
package 包；
 ```

#### 建包：

手动——编译java文件，在盘建文件夹com，下级再建一层文件夹，把class文件放进去

自动——java -d . HelloWorld.java

#### 导包：

 ```java
import 包名；
 ```

#### 修饰符

**权限修饰符**

 ```java
private
void
protected
public
 ```

<img src="C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425152914943.png" alt="image-20220425152914943" style="zoom:50%;" />

**final修饰符**

修饰方法：表明该方法是最终方法，不能被重写

修饰变量：表明该变量是常量，不能再次被赋值

修饰类：表明该类是最终类，不能被继承

修饰局部变量：

​	变量是基本类型：数据值不能发生改变

​	变量是引用类型：地制止不能改变，但是地址的内容可以改变

**static**

可以修饰成员方法、成员变量

静态修饰：被所有对象的成员共享

推荐使用类名调用

访问特点：静态成员方法只能访问静态成员

#### 多态

同一个对象，在不同时刻表现出来的不同形态

访问特点：成员变量：编译看左边，执行看左边

​					成员方法：编译看左边，执行看右边，有重写

![image-20220425163530980](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425163530980.png)		多态的转型：

向上转型：从子到父；父类引用**指向**子类对象

向下转型：从父到子，父类引用**转为**子类对象



#### 抽象类

```java
public abstract class Animal{
    public abstract viod eat();
}
//创建对象

```

特点：

抽象类和方法必须用abstract关键字修饰

抽象类中不一定有抽象方法，但有抽象方法的类一定是抽象类

抽象类参照多态的方式，通过子类对象实例化

抽象类的子类，1.重写抽象类中的所有抽象方法2.本身是抽象类

<img src="C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425171519172.png" alt="image-20220425171519172" style="zoom: 50%;" />

### 接口interface

是一种公共的规范标准，符合规范大家都可以使用

java中的接口更多体现在对行为的抽象

**特点**

```java
public interface 接口名{}
public class lei implements 接口名{}
跟抽象类后两条一致
```

成员特点

成员变量：只能是常量

```java
public static final
```

构造方法：接口没有构造方法；一个类如果没有父类，默认继承Object类

成员方法：只能是抽象方法

```java
public abstract
```



**类和接口的关系**

<img src="C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425173723048.png" alt="image-20220425173723048" style="zoom:80%;" />

**抽象类和接口的区别**

<img src="C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425173852191.png" alt="image-20220425173852191" style="zoom:80%;" />

**类名作为形参和返回值**

![image-20220425182032959](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425182032959.png)

**抽象类名作为形参和返回值**

![image-20220425182317064](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425182317064.png)

**接口名作为形参和返回值**

![image-20220425182514076](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425182514076.png)



#### 内部类

在一个类中定义一个类

```java
public class lei{
    修饰符 class leilei{
        public void show(){
            
        }
    }
}
```

特点：内部类可以直接访问外部类的成员，包括私有

​			外部类要访问内部类成员，必须要创建对象

**成员内部类**

```java
外部类名.内部类名 对象名 = new 外部类对象.内部类对象
Outer.Inner oi = new Outer().new Inner();
//
private class Inner{
    public void show(){
        syot
    }
}
public void method(){
    Inner i = new Inner();
    i.show();
}
```

**局部内部类**

![image-20220425184752487](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425184752487.png)**匿名内部类**

前提：存在一个类或接口，类可以是具体类也可以是抽象类

格式：

```java
(Inner i = )new 类名/接口名(){
    重写方法;
}
```

本质：是一个继承了该类或实现了该接口的子类匿名对象

使用：

### 常用API

**Math类**

![image-20220425190228374](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425190228374.png)

**System类**

![image-20220425190653111](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425190653111.png)

**Object类**

toString()方法

equals()方法

**Arrays类**

![image-20220425205300732](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425205300732.png)

包含用于操作数组的各种方法

**Integer类**

```java
Integer.MIN_VALUE
Integer.MAX_VALUE
```



#### 基本类型包装类

<img src="C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425210558855.png" alt="image-20220425210558855" style="zoom:50%;" />

**Integer类**

![image-20220425210708652](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220425210708652.png)

**int和String相互转换**

```java
//int--->String(1)
int number = 100;
String s1 = "" + number
//(2)
String s2 = String.valueOf(number);

//String--->Integer--->int(1)
Integer i = Integer.valueOf(s);
int x = i.intValue();
```



#### 装箱：

把基本数据转换成对应的包装类类型

#### 拆箱：

把包装类类型转换为对应的基本数据类型



#### Date类

![image-20220426101404840](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220426101404840.png)

```java
Date d = new Date();
d.getTime();
syot(d.getTime()*1.0/1000/60/60/24/365+"年");
//设置时间
long time = 1000*60*60;
d.setTime(time);
//(2)
long time = System.currentTimeMillis();
d.setTime(time);
```

#### SimpleDateFormat类

格式化：Date---->String从日期格式化日期/时间字符串

解析：String---->Date从给定字符串开始解析文本以生成日期。

![image-20220426102314668](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220426102314668.png)

```java
Date d = new Date();
SimpleDateFormat sdf = new SimpleDateFormat(yyyy年MM月dd日 HH：mm：ss);
String s = sdf.format(d);
syot(s);
//
String ss = "2022-2-22 11:11:11"
SimpleDateFormat sdf2 = new SimpleDateFormat(yyyy-MM-dd HH：mm：ss);
Date dd = sdf2.parse(ss);
syot(dd);
```

#### Calender日历类

```java
Calender c = new Calender();
int year = c.get(Calenser.YEAR);
int mouth = c.get(Calenser.MOUTH)+1;
int date = c.get(Calender.DATE);
syot();
```

![image-20220426104617039](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220426104617039.png)

```java
c.add(Calender.YEAR,-3);
c.add(Calender.DATE,5);

c.set(2048,11,11);
int year = c.get(Calenser.YEAR);
int mouth = c.get(Calenser.MOUTH)+1;
int date = c.get(Calender.DATE);
syot();
```



### 异常

![image-20220426105823258](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220426105823258.png)

异常处理

try...catch

![image-20220426105916015](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220426105916015.png)

throw

抛出异常：throw  异常类名

自定义异常

![image-20220426111134079](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220426111134079.png)