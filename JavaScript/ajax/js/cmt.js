function getCommentList(){
    $.ajax({
        method:'GET',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success:function(res){
            if(res.status !== 200) return alert('获取评论列表失败！')
            // 定义一个空数组对象
            let rows = [];
            res.data.forEach(item => {
                rows.push(`<li class="list-group-item">
                <span class="badge" style="background-color: #f0ad4e;">评论时间:${item.time}</span>
                <span class="badge" style="background-color: #5bc0de;">评论人:${item.username}</span>
                ${item.content}</li>`)
            });
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}
getCommentList()
// 发表评论
$(function() {
    $('#formAddCmt').on('submit',function(e){
        e.preventDefault()
        let data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            if(res.status !== 201){
                alert('发表评论失败！')
            }
            getCommentList();
            // 利用[0]将jquery对象转化为原生dom对象
            $('#formAddCmt')[0].reset()
        })

    })
})