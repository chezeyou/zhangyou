function ajax(method,url,data,options) {
    let req;

    if (window.XMLHttpRequest){  // W3C标准
        req = new XMLHttpRequest();
    }else{                        // IE标准
        req = new ActiveXObject('Microsoft.XMLHTTP')
    };

    method=(method || 'GET').toUpperCase();
    options.dataType = options.dataType || 'json'; 
    options.async  = options.async || 'true';
    return new Promise((resolve,reject) =>{
        res.onreadystatechange = ()=>{
            if(req.readyState === 4 && req.status === 200){
                resolve(req.response);
            }else{
                reject(req.status);
            }
        };
        if(method==='GET'){
            let params=getParams(data);
            req.open("GET",url + '?' + params ,options.async);
            xhr.send(null)
        }else if(method === 'POST'){
            req.open("POST",url,options.async);
            req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            req.send(data);
        }
       
    })
}
 /**
     * GET 对象参数的处理
     * @param data
     * @returns {string}
     */
function getParams(data) {
    var arr = [];
    for (var param in data){
        arr.push(encodeURIComponent(param) + '=' +encodeURIComponent(data[param]));
    }  
    arr.push(('zy=' + Math.random()).replace('.')); 
    return arr.join('&');
}