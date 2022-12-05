// 将传递过来的对象类型数据转换为键值对查询字符串格式
function resolveData(data){
    let arr = []
    for(let k in data){
        arr.push(k + '=' + data[k])
    }
    return arr.join('&')
}

function myself(options){
    // 1.创建xhr对象
    let xhr = new XMLHttpRequest()
    // 把外界传递过来的对象参数，转化为查询字符串
    let qs = resolveData(options.data)

    if(options.method.toUpperCase() === 'GET'){
        xhr.open(options.method,options.url + '?' + qs)
        xhr.send()
    }else if(options.method.toUpperCase() === 'POST'){
        xhr.open(options.method,options.url)
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(qs)
    }
   
    // 4.监听onreadystatechange事件
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let result = JSON.parse(xhr.responseText)
            options.success(result);
        }
    }
}