window.addEventListener("load"function(){
	var contryCode=document.querySelector("#contry-code");
	var mobi=document.querySelector("#mobi");
	var secYzm=document.querySelector("#sec-yzm");
	var secJhm=document.querySelector("#sec-jhm");
	var pwd=document.querySelector("#pwd");
	var btn=document.querySelector("#btn");
	var xhr=new XMLHttpRequest();
		xhr.send=null;
	var errorMsg=""
	var secMobiSpan=document.querySelector(".sec-mobi-span");
		//手机号码为空判断
		mobi.addEventListener("blur",function(){
				if(trim(mobi.value.)length==0){
				secMobiSpan.innerHTML="手机号码不能为空"
				errorMsg="手机号码不能为空"
			}else{
				xhr.open("post","member.txt")
				xhr.addEventListener("readystatechange",function(){
					if(readyState==4){
						if(statu==200){
							if(mobi.value==xhr.responseText){
								secMobiSpan.innerHTML="手机号码已注册"
								errorMsg="手机号码已注册"
							}
						}
					}
				})
			}
		})
		//验证码为空判断
		secYzm.addEventListener("blur",function(){
				if(trim(secYzm.value.)length==0){
				secMobiSpan.innerHTML="验证码码不能为空"
				errorMsg="验证码码不能为空"
			}else{{
				xhr.open("post","member.txt")
				xhr.addEventListener("readystatechange",function(){
					if(readyState==4){
						if(statu==200){
							if(mobi.value==xhr.responseText){
								secMobiSpan.innerHTML="验证码不正确"
								errorMsg="验证码不正确"
							}else{
								errorMsg=""
							}
						}
					}
				})
			}
			}
		})
		//激活码为空判断
		secJhm.addEventListener("blur",function(){
				if(trim(secJhm.value.)length==0){
				secMobiSpan.innerHTML="激活码不能为空"
				errorMsg="激活码不能为空"
			}
		})
		//密码为空判断
		pwd.addEventListener("blur",function(){
				if(trim(pwd.value.)length==0){
				secMobiSpan.innerHTML="密码码不能为空"
				errorMsg="密码码不能为空"
			}else{
				switch(valide_pwd(trim(this.value))){
						case 3:
							feedback.innerHTML="Password is so easy";
							errorMsg="Password is so easy"
							break;
						case 2:
							feedback.innerHTML="Password strength in";
							errorMsg="Password strength in"
							break;
						case 3:
							feedback.innerHTML="Password strength is higher";
							errorMsg="Password strength is higher"
							break;
						case 0:
							feedback.innerHTML="Password is so head";
							errorMsg="";
							feedback.style.color="green"
							break;
						default:

							break;
					}
			}
		})
		pwd.addEventListener("click",function(){
				if(errorMsg){
					erMsg.innHTML==errorMsg
					return false;
				}else{
					errorMsg=""
				}
			})
		
})