$(function(){
  // 定义补零函数
  function addZero(n){
    // if(n < 10){
    //   return '0' + n
    // }else{
    //   return n
    // }
    // 需要写return才能返回值
    return n < 10 ? '0'+ n : n
  }
  // 定义格式化时间过滤器
  template.defaults.imports.dateFormat = function (param){
    {
      // 重新给一个date函数
      let date = new Date(param)
      let y = date.getFullYear()
      let m = addZero(date.getMonth() + 1)
      let d = addZero(date.getDate())

      let h = addZero(date.getHours())
      let mm = addZero(date.getMinutes())
      let s = addZero(date.getSeconds())
      /*return处理的结果*/
      return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s
  }
  }
  // 得到新闻列表
  function getNewsList(){
    $.get('http://www.liulongbin.top:3006/api/news',function(res){
      if(res.status !== 200){
        alert('获取新闻列表失败！')
      }
      // 将一串字符串改写成用逗号分隔的字符串数组
      // console.log(res.data.tags.split(','));  不能这样输出
      
      for(let i = 0; i < res.data.length; i++){
        // let arr = res.data[i].tags.split(',')
        // res.data[i].tags = arr
        res.data[i].tags = res.data[i].tags.split(',')
      }
      $('#news-list').html(template('tpl-news',res))
    })
  }
  getNewsList()
})
