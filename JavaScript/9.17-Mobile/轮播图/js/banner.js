window.addEventListener('load',function(){
    var banner = this.document.querySelector('.banner')
    var ul = this.document.querySelector('ul')
    var ol = this.document.querySelector('ol')
    //获取父盒子的宽度，每次自动跳转都是父盒子的宽度
    var width = banner.offsetWidth
    var num = 0
    var flag = false
    var timer = this.setInterval(function(){
        num++
        var translatex = - num * width 
        ul.style.transition = 'all 0.3s'
        ul.style.transform = 'translateX('+translatex+'px)'
    },1000)
    //等过渡执行完以后再进行判断操作，监听过渡完成以后的事件transitioned
    ul.addEventListener('transitionend',function(){
        //防止偏移量大于num后，不断累加，所以不是==，而是>=
        if(num >= ul.children.length - 2){
            num = 0
            //去掉动画效果，让最后一张快速跳到第一张
            ul.style.transition = 'none'
            var translatex = - num * width 
            ul.style.transform = 'translateX('+translatex+'px)'
        }else if(num < 0){
            num = ul.children.length - 3
            ul.style.transition = 'none'
            var translatex = - num * width 
            ul.style.transform = 'translateX('+translatex+'px)'
        }
        //过渡结束之后，让小圆圈自动循环
        ol.querySelector('li.current').classList.remove('current');
        ol.children[num].classList.add('current')
    })
    //手指滑动轮播图
    var startX = 0;
    var moveX = 0
    ul.addEventListener('touchstart',function(e){
        startX = e.targetTouches[0].pageX
        //手指按下的时候就清除播放的效果
        clearInterval(timer)
    })
    ul.addEventListener('touchmove',function(e){
        moveX = e.targetTouches[0].pageX - startX
        // ul.style.transform = 'translateX('+moveX+'px)'
        //还需要移动盒子，盒子原来的位置 + 手指移动的距离
        var translatex = - num * width + moveX
        // ul.style.transition = 'none'
        ul.style.transform = 'translateX('+translatex+'px)'
        flag = true
        e.preventDefault();
    })
    ul.addEventListener('touchend',function(){
        if(flag){
            if(Math.abs(moveX) > 200){
                if(moveX > 0){
                    num--
                }else{
                    num++
                }
                var translatex = - num * width
                ul.style.transition = 'all 0.3s'
                ul.style.transform = 'translateX('+translatex+'px)'
            }else{
                var translatex = - num * width
                ul.style.transition = 'all 0.3s'
                ul.style.transform = 'translateX('+translatex+'px)'
            }
        }
        clearInterval(timer)
        timer = setInterval(function(){
            num++
            var translatex = - num * width 
            ul.style.transition = 'all 0.3s'
            ul.style.transform = 'translateX('+translatex+'px)'
        },1000)
    })
})