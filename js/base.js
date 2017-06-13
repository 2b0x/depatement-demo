window.onload=function(){
			var c=document.getElementById("myCanvas");
			var cxt=c.getContext("2d");
			var img=new Image();
			img.onload=function(){
				cxt.drawImage(img,0,0);
			}
			img.src="images/logo.png";
		};