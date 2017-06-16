window.addEventListener("load",function(){
/*--------------------------tab 页效果----------------------------------------*/
var lis=document.querySelectorAll(".tab li");
	//console.log(lis)
	 //获取多个list
	var divs=document.querySelectorAll(".tab div");
	//通过循环为目标元素
	  	lis.forEach(function(value,index){
	  	value.addEventListener("mouseover",function(){
	  		// console.log(value)
	  		lis.forEach(function(v,i){
	  			v.className="";
	  			divs[i].className=" ";
	  		})
			value.className="active";
	  		divs[index].className="spotlight";

		})
	})
/*--------------------------------------tab页 End------------------------------------*/	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
})