window.addEventListener("load",function(){
	/* --------------------点击颜色变粗---------------------------*/
	var radiolis= document.querySelectorAll(".radioul li");
		radiolis.forEach(value,index){
			if(this.value=checked){
				this.className="radioclass"
			}else{
				this.className=""
			}
		}
	/* --------------------→---------------------------*/
	var username=document.querySelector("#username");
	var pwd = =document.querySelector("#pwd");
	var xhr=new XMLHttpRequest();
	var send=(null);
		xhr.open("post","member.txt")
		if(xhr.readyState==4){
			if(status==200){
				username.addEventListener("readystatechange",function(){
					
				})
			}
		};
		
});
	//用户名是否为空
	if(username.value.length==0){
		
	}
/* --------------------→---------------------------*/