$(function(){
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中，实现跳转到页面底部
    resetui()

// 为发送按钮绑定点击事件
$('#btnSend').on('click',function(){
    let text = $('#ipt').val().trim()
    if(text.length <= 0){
        return $('#ipt').val('')
    }
    $('#talk_list').append(`<li class="right_word">
        <img src="img/person02.png" /> 
        <span>${text}</span></li>`)
    $('#ipt').val('')
    // 重置滚动条
    resetui();
    // 点击发送之后，拿到发送的信息，传递给接口，得到接口返回回来的信息
    getMsg(text)
})
// 发起请求获取聊天消息
function getMsg(text){
    $.ajax({
        method:'GET',
        url: 'http://www.liulongbin.top:3006/api/robot',
        data:{
            spoken:text
        },
        success:function(res){
            let msg = res.data.info.text
            if(res.message == 'success'){
                $('#talk_list').append(`<li class="left_word">
                    <img src="img/person01.png" /> 
                    <span>${msg}</span></li>`)
                resetui();
                // 拿到机器人返回的消息调用音频接口
                getVoice(msg)
            }
        }
    })
}
// 将消息转换为语音
function getVoice(text){
    $.ajax({
        method:'GET',
        url:' http://www.liulongbin.top:3006/api/synthesize',
        data:{
            text:text
        },
        success:function(res){
            // console.log(res);
            // 添加一个音频控件,让他自动播放autoplay
            if(res.message == 'success'){
                $('#voice').attr('src',res.voiceUrl)
            }
        }
    })
}
// 给文本框添加一个键盘事件
$('#ipt').on('keyup',function(e){
    if(e.key == 'Enter'){
        $('#btnSend').click()
    }
})
})
