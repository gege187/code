// var that
class Tab {
    constructor(id){
        // 用bind方法改变this指向
        // that = this
        // 获取元素
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.add')
        this.ul = this.main.querySelector('ul')
        this.content = this.main.querySelector('.content')
        // 页面一打开就执行
        this.init()
    }
    // init初始化操作让相关元素绑定事件
    init(){
        this.updateNode()
        for(let i = 0; i < this.lis.length; i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this);
            // close的绑定事件可以放在lis中一起
            this.close[i].onclick = this.removeTab.bind(this.close[i],this);
            this.spans[i].ondblclick = this.editTab; 
            // cons的双击表单事件和span的一模一样，
            this.cons[i].ondblclick = this.editTab;
        }
        this.add.onclick = this.addTab.bind(this.add,this);
    }
    updateNode(){
        // 在添加时需要重新生成li和con，所以要一直更新
        this.lis = this.main.querySelectorAll('li')
        this.cons = this.main.querySelectorAll('.con')
        this.close = this.main.querySelectorAll('img')
        this.spans = this.main.querySelectorAll('span')
    }
    clearClass(){
        // 这样写在删除当前元素时会发生错误
        // document.querySelector('.bord').classList.remove('bord')
        // document.querySelector('.show').classList.remove('show')
        for(let i = 0; i < this.lis.length; i++){
            this.lis[i].className = ''
            this.cons[i].className = 'con'
        }
    }
    // 1.切换
    toggleTab(that){
        // console.log(this.index);       
        that.clearClass()
        this.className = 'bord'  
        that.cons[this.index].classList.add('show')
    }
    // 2.添加
    addTab(that){
        let random = Math.random()
        that.clearClass()
        let li = `<li class="bord"><span>tab</span><img src="image/关闭.png" alt="" class="close"></li>`
        // 追加到父元素中
        that.ul.insertAdjacentHTML('beforeend',li)
        // con部分内容同理
        let con = `<div class="con show">${random}</div>`
        that.content.insertAdjacentHTML('beforeend',con)
        that.init()
    }
    // 3.删除
    removeTab(that,e){
        // 事件冒泡会导致点击关闭时li会发生切换
        e.stopPropagation();
        let index = this.parentNode.index
        // 删除关闭按钮的父元素
        this.parentNode.remove()
        // that.lis[index].remove()
        that.cons[index].remove()
        that.init()
        // 如果删除的不是当前有选中状态的li，删除时当前选定状态不变
        // 如果能找到有这个选择器的，就不执行后边的，找不到的话就执行后边的操作
        if(document.querySelector('.show')) return 
        // 删除第一个时，让新的第一个li获得点击状态
        if(index == 0) index = 1
        // 删除当前元素li后，让前一个li处于选定状态（让前一个li得到点击操作）
        index--;
        // 前者为真时执行后一个操作
        that.lis[index] && that.lis[index].click()

    }
    // 4.修改
    editTab(){
        // 先获取到原有的内容
        let str = this.innerHTML
        // 双击事件
        // 阻止双击事件选中文字效果
        window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
        this.innerHTML = `<input type="text" />`
        // 把原有内容赋值给input
        let input = this.children[0]
        input.value = str
        // 让文本框中的文字处于被选中状态
        input.select();
        // 离开后，把文本框中的值给span，把文本框取消掉
        input.onblur = function(){
            // 原本把innerHTML给了input，现在给了文字内容，所以现在是文字，把文本框覆盖掉了
            this.parentNode.innerHTML = this.value
        }
        // 回车键完成上一步操作
        input.onkeyup = function(e){
            if(e.code === 'Enter'){
                // 手动调用表单失去焦点事件
                this.blur()
            }
        }
    }
}
let tab = new Tab('.box')