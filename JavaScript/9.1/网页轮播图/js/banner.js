window.addEventListener('load',function(){
    var left = this.document.querySelector('.left')
    var right = this.document.querySelector('.right')
    var img = this.document.querySelector('img')
    var banner = this.document.querySelector('.banner')
    banner.addEventListener('mouseenter',function(){
        left.style.display = 'block'
        right.style.display = 'block'
        clearInterval(autoPlay)
        //清除定时器变量
        autoPlay = null
    });
    banner.addEventListener('mouseleave',function(){
        left.style.display = 'none'
        right.style.display = 'none'
        clearInterval(autoPlay)
        autoPlay = setInterval(function(){
            right.click();
        },2000)
    });
    //动态生成小圆圈
    var ul = this.document.querySelector('ul')
    var ol = this.document.querySelector('ol')
    //图片宽度
    var imgWidth = img.offsetWidth
    //
    for(var i = 0; i < ul.children.length; i++){
        //创建li节点
        var li = this.document.createElement('li')
        //记录当前小圆圈的索引号，自定义属性
        li.setAttribute('index',i)
        ol.appendChild(li)
        //排他思想
        li.addEventListener('click',function(){
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].className = ''
            }
            this.className = 'current'
            var index = this.getAttribute('index')
            //num负责点击箭头移动ul的位置
            num = index
            //circle负责点击右箭头时小圆圈跟随箭头变化
            circle = index
            animate1(ul,-(imgWidth*index))
        })
    }
    ol.children[0].className = 'current'

    //克隆第一张图片放在最后面
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first);
    var circle = 0;
    //右侧按钮点击++
    var num = 0;
    var flag = true
    right.addEventListener('click',function(){
        if(flag){
            flag = false
            if(num==ul.children.length - 1){
                ul.style.left = 0 +'px'
                num = 0
            }
            // num = index
            num++
            animate1(ul,-imgWidth*num,function(){
                flag = true
            })
            // 圆圈跟随左右箭头的变化
            circle++
            if(circle == ol.children.length){
                circle = 0
            }
            circleChange();
        }
    })

    left.addEventListener('click',function(){
        if(flag){
            flag = false
            if(num == 0){
                num = ul.children.length - 1
                ul.style.left = -num*imgWidth +'px'
            }
            // num = index
            num--
            animate1(ul,-imgWidth*num,function(){
                flag  = true
            })
            // 圆圈跟随左右箭头的变化
            circle--
            // if(circle < 0){
            //     circle = ol.children.length - 1
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle
            circleChange();
        }
    })
    function circleChange(){
        for(var i = 0;i < ol.children.length;i++){
            ol.children[i].className = ''
        }
        ol.children[circle].className = 'current'
    }
    //自动播放
    var autoPlay = this.setInterval(function(){
        right.click();
    },2000)
})