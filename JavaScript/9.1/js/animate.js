function animate(obj,target,callback){
    clearInterval(obj.move)
    obj.move = setInterval(function(){
        if(obj.offsetLeft == target){
            clearInterval(obj.move)
            if(callback){
                callback();
            }
        }
        //缓动就是把步长慢慢缩小
        // obj.style.left = obj.offsetLeft + 1 + 'px'
        //要取整，否则可能距离会是小数值不准确
        // var step = Math.ceil((target - obj.offsetLeft) / 10)有判断条件
        var step = (target - obj.offsetLeft) / 10
        step = step > 0? Math.ceil(step) : Math.floor(step)
        obj.style.left = obj.offsetLeft + step + 'px'
    },30)
}
function animateBack(obj,target,callback){
    clearInterval(obj.move)
    obj.move = setInterval(function(){
        if(window.pageYOffset == target){
            clearInterval(obj.move)
            if(callback){
                callback();
            }
        }
        //缓动就是把步长慢慢缩小
        // obj.style.left = obj.offsetLeft + 1 + 'px'
        //要取整，否则可能距离会是小数值不准确
        // var step = Math.ceil((target - obj.offsetLeft) / 10)有判断条件
        var step = (target - window.pageYOffset) / 10
        step = step > 0? Math.ceil(step) : Math.floor(step)
        // obj.style.left = window.pageYOffset + step + 'px'
        window.scroll(0,window.pageYOffset + step)
    },30)
}