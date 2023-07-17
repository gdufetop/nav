document.getElementById('upbt').onclick=function(ev){
	document.getElementById("upload").click();
};
document.getElementById('avatar_template').src = "./6A33F4101AD35CE7.png";
loadImage();
var ls=["6A33F4101AD35CE7","202495CE5476FB63" ,"7FE0757EA5205290","8B4B118F00A6DE7D","3FD61CC4A8146AEF","1288BD447DF9076C","B64E053CC7F45B23","3438234DE99FE373"];
var li=document.getElementsByTagName('li');
for (var i=0 ;i<li.length;i++){(function(i){
	li[i].onclick=function(ev){
	document.getElementById('avatar_template').src = './' + ls[i] + '.png';
	loadImage();
} })(i)
}
function can2png(canvas){
	var png = new Image();
	png.src = canvas.toDataURL("image/png");
	png.onload=function(){document.getElementById("preview").appendChild(png);}
}
function loadImage() {
	if (document.getElementById('upload').files.length == 0){var imgUrl =document.getElementById('avatar_template').src}else{
	var imgUrl = window.URL.createObjectURL(document.getElementById('upload').files[0]);}
	document.getElementById('avatar_img').src = imgUrl;
	drawImage(imgUrl, document.getElementById('avatar_template').src)
}
function drawImage(img, frame) {
	var canvas = document.getElementById('canvas');
	var size = 500;
	 canvas.width = size;
	canvas.height = size;
	var ctx = canvas.getContext('2d');
	var image = new Image;
	image.src = img;
	image.onload = function() {
		ctx.drawImage(image, 0, 0, size, size);
		image = new Image;
		image.src = frame;
		image.onload = function() {
			ctx.drawImage(image, 0, 0, size, size);
			document.getElementById("preview").removeChild(document.getElementById("preview").childNodes[0]);
			can2png(canvas);
		};
	};
}
