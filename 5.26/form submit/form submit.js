/** 
#表单同步提交，异步提交 
#将平时请求封装成form表单提交
#异步提交有哪几种方法；
原生封装//jquery 
1.onsubmit="return function() {}" button type = 'image' 2.封装成ajax 3.jquery
get post 方法 “
四种提交方式 button/input submit提交 form.submit 提交 form.onsubmit='return formSubmit()' function formSubmit () {retuen boolen}
页面不跳转提交  异步提交ajax 在form onsubmit函数中发送ajax jQuery ajaxSubmit，     iframe提交
待完善。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
@async {boolen}
@method {post,get}
@url {string}
@data 将表单中的内容获取 以对象的形式放入data中
*/


function formStandard (url, data, method, async) {
    var form = $("<form method='post'></form>"),  input;
    //jquery方式
    $(document.body).append(form);
    //js原生添加
    //document.body.appendChild(form);
    form.attr({"action":url});
    $.each(data, (key,value)=> {
        input = $("<input type='hidden'>");
        input.attr({"name":key});
        input.val(value);
        form.append(input);
    });
    console.log(args);
    form.submit();
    }

